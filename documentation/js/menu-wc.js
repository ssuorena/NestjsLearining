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
                    <a href="index.html" data-type="index-link">learning documentation</a>
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
                                            'data-bs-target="#controllers-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' : 'data-bs-target="#xs-controllers-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' :
                                            'id="xs-controllers-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' : 'data-bs-target="#xs-injectables-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' :
                                        'id="xs-injectables-links-module-AppModule-20a5e787fbcbff345f9ad00dbeb067335580398ed4be34369cedae248b43936ef514b5e3f511639b3135ea820554267fd1704b694fcaf7ef73a99b3ec544b721"' }>
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
                                            'data-bs-target="#controllers-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' :
                                            'id="xs-controllers-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' :
                                        'id="xs-injectables-links-module-AuthModule-7298b394cbb871576cf00dd37c7c907736d77595c1c0f5b8865b00203159fa4bf0c1c81c9ba0f2e9a7e2f91c4a41139dc273cc53c687ec2f6f26d77adc5edc62"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' :
                                            'id="xs-controllers-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' :
                                        'id="xs-injectables-links-module-UsersModule-ab7914a3ad259370b5c9b0eeb1a76f1d5eaa3b2540b68aa027c27f4e31885354240d0a31f11eb8e27dcbdb0ba34f0538856302f4473cd3d87fc3893dda770711"' }>
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
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
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
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
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
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LimitMiddleware.html" data-type="entity-link" >LimitMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerMiddleware.html" data-type="entity-link" >LoggerMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SessionData.html" data-type="entity-link" >SessionData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SessionData-1.html" data-type="entity-link" >SessionData</a>
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