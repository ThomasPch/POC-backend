'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">poc-v1 documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-fe52ebfaf49cd7e2db4294b307ed3d716d350838539934059a4695d32914ec59f18a429229b1b58629bcda4030ae3fdfd58bd58d850a90030edf9dae9c5a2e97"' : 'data-bs-target="#xs-injectables-links-module-AppModule-fe52ebfaf49cd7e2db4294b307ed3d716d350838539934059a4695d32914ec59f18a429229b1b58629bcda4030ae3fdfd58bd58d850a90030edf9dae9c5a2e97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-fe52ebfaf49cd7e2db4294b307ed3d716d350838539934059a4695d32914ec59f18a429229b1b58629bcda4030ae3fdfd58bd58d850a90030edf9dae9c5a2e97"' :
                                        'id="xs-injectables-links-module-AppModule-fe52ebfaf49cd7e2db4294b307ed3d716d350838539934059a4695d32914ec59f18a429229b1b58629bcda4030ae3fdfd58bd58d850a90030edf9dae9c5a2e97"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' :
                                            'id="xs-controllers-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' :
                                        'id="xs-injectables-links-module-AuthModule-6d2d4d5bd72551d5f4db6e6b7b9eea8ee007dfa10161d338d15e5adbee2679d5f0eed35f3b3641e7f88c491cbc1572f7d1cc8fbd49d85f50c4821b6a71c8bb86"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-ee8993ea624e695e9c9159ecfb9510bc002d2c390eb945ffb911531bb40790cc743ccdc3039b55b2c04c2c3ab277e01f0ce6a1d18420194f4ccad0956d6f3acb"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-ee8993ea624e695e9c9159ecfb9510bc002d2c390eb945ffb911531bb40790cc743ccdc3039b55b2c04c2c3ab277e01f0ce6a1d18420194f4ccad0956d6f3acb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-ee8993ea624e695e9c9159ecfb9510bc002d2c390eb945ffb911531bb40790cc743ccdc3039b55b2c04c2c3ab277e01f0ce6a1d18420194f4ccad0956d6f3acb"' :
                                        'id="xs-injectables-links-module-UsersModule-ee8993ea624e695e9c9159ecfb9510bc002d2c390eb945ffb911531bb40790cc743ccdc3039b55b2c04c2c3ab277e01f0ce6a1d18420194f4ccad0956d6f3acb"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Users.html" data-type="entity-link" >Users</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppResolver.html" data-type="entity-link" >AppResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserInput.html" data-type="entity-link" >CreateUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserInput.html" data-type="entity-link" >UpdateUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersArgs.html" data-type="entity-link" >UsersArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersResolver.html" data-type="entity-link" >UsersResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BcryptService.html" data-type="entity-link" >BcryptService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GraphqlOptions.html" data-type="entity-link" >GraphqlOptions</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingService.html" data-type="entity-link" >HashingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});