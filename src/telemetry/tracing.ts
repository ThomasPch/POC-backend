import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { NodeSDK, api } from '@opentelemetry/sdk-node';
import * as process from 'process';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { Logger } from '@nestjs/common';
import { NestInstrumentation } from '@opentelemetry/instrumentation-nestjs-core';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';
import { B3Propagator } from '@opentelemetry/propagator-b3';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';

const oltpExporter = new OTLPTraceExporter({
  url: `http://srvrdtek2.eyc.com:7618/v1/traces`,
});
//const traceExporter = new ConsoleSpanExporter();
const traceExporter = oltpExporter;
//api.propagation.setGlobalPropagator(new B3Propagator());
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);
// const provider = new NodeTracerProvider();
// provider.register();
export const otelSDK = new NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: `srvrdtek-tomee8`, // update this to a more relevant name for you!
  }),
  spanProcessor: new SimpleSpanProcessor(traceExporter),
  instrumentations: [
    // Fastify instrumentation expects HTTP layer to be instrumented
    new HttpInstrumentation(),
    new FastifyInstrumentation(),
    new NestInstrumentation(),
  ],
});

// gracefully shut down the SDK on process exit
process.on('SIGTERM', () => {
  otelSDK
    .shutdown()
    .then(
      () => Logger.log('SDK shut down successfully'),
      (err) => Logger.log('Error shutting down SDK', err),
    )
    .finally(() => process.exit(0));
});
