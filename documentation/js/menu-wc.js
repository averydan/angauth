'use strict';

customElements.define(
  'compodoc-menu',
  class extends HTMLElement {
    constructor() {
      super();
      this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
      this.render(this.isNormalMode);
    }

    render(isNormalMode) {
      let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">red-beard-beats-f documentation</a>
        </li>
        <li class="divider"></li>
        ${
          isNormalMode
            ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
`
            : ''
        }
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
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${
                      isNormalMode
                        ? 'data-target="#modules-links"'
                        : 'data-target="#xs-modules-links"'
                    }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"'}>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-AppModule-f8c6182d827345528bc72d5cd39e5f33"'
                                        : 'data-target="#xs-components-links-module-AppModule-f8c6182d827345528bc72d5cd39e5f33"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-AppModule-f8c6182d827345528bc72d5cd39e5f33"'
                                        : 'id="xs-components-links-module-AppModule-f8c6182d827345528bc72d5cd39e5f33"'
                                    }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-AuthenticationModule-ec2ce39c3d11cd8d22358b8605c558e3"'
                                        : 'data-target="#xs-components-links-module-AuthenticationModule-ec2ce39c3d11cd8d22358b8605c558e3"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-AuthenticationModule-ec2ce39c3d11cd8d22358b8605c558e3"'
                                        : 'id="xs-components-links-module-AuthenticationModule-ec2ce39c3d11cd8d22358b8605c558e3"'
                                    }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#injectables-links-module-CoreModule-c0f92218224a6e9ad799aee710277b4a"'
                                        : 'data-target="#xs-injectables-links-module-CoreModule-c0f92218224a6e9ad799aee710277b4a"'
                                    }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="injectables-links-module-CoreModule-c0f92218224a6e9ad799aee710277b4a"'
                                        : 'id="xs-injectables-links-module-CoreModule-c0f92218224a6e9ad799aee710277b4a"'
                                    }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ErrorMessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ErrorMessageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>LocalStorageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UserService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UtilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>UtilService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-DashboardModule-42fc9b8c89cb8a6bcc334035fb1ca5b5"'
                                        : 'data-target="#xs-components-links-module-DashboardModule-42fc9b8c89cb8a6bcc334035fb1ca5b5"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-DashboardModule-42fc9b8c89cb8a6bcc334035fb1ca5b5"'
                                        : 'id="xs-components-links-module-DashboardModule-42fc9b8c89cb8a6bcc334035fb1ca5b5"'
                                    }>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${
                                      isNormalMode
                                        ? 'data-target="#components-links-module-SharedModule-0805a3a9669f2f77a3ea0a0e7aa7c171"'
                                        : 'data-target="#xs-components-links-module-SharedModule-0805a3a9669f2f77a3ea0a0e7aa7c171"'
                                    }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${
                                      isNormalMode
                                        ? 'id="components-links-module-SharedModule-0805a3a9669f2f77a3ea0a0e7aa7c171"'
                                        : 'id="xs-components-links-module-SharedModule-0805a3a9669f2f77a3ea0a0e7aa7c171"'
                                    }>
                                        <li class="link">
                                            <a href="components/BlankComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlankComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BreadcrumbComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ButtonLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonLoaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FormErrorWrapperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormErrorWrapperComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FullComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FullComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${
                      isNormalMode
                        ? 'data-target="#components-links"'
                        : 'data-target="#xs-components-links"'
                    }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${
                      isNormalMode
                        ? 'id="components-links"'
                        : 'id="xs-components-links"'
                    }>
                            <li class="link">
                                <a href="components/BlankComponent.html" data-type="entity-link">BlankComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link">BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonLoaderComponent.html" data-type="entity-link">ButtonLoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link">DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormErrorWrapperComponent.html" data-type="entity-link">FormErrorWrapperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FullComponent.html" data-type="entity-link">FullComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NotFoundComponent.html" data-type="entity-link">NotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupComponent.html" data-type="entity-link">SignupComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpinnerComponent.html" data-type="entity-link">SpinnerComponent</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${
              isNormalMode
                ? 'data-target="#classes-links"'
                : 'data-target="#xs-classes-links"'
            }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"'}>
                    <li class="link">
                        <a href="classes/HttpInterceptorHandler.html" data-type="entity-link">HttpInterceptorHandler</a>
                    </li>
                    <li class="link">
                        <a href="classes/RouteReusableStrategy.html" data-type="entity-link">RouteReusableStrategy</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${
                          isNormalMode
                            ? 'data-target="#injectables-links"'
                            : 'data-target="#xs-injectables-links"'
                        }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${
                      isNormalMode
                        ? 'id="injectables-links"'
                        : 'id="xs-injectables-links"'
                    }>
                            <li class="link">
                                <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/BaseAPIClass.html" data-type="entity-link">BaseAPIClass</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ErrorMessageService.html" data-type="entity-link">ErrorMessageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/HttpService.html" data-type="entity-link">HttpService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LocalStorageService.html" data-type="entity-link">LocalStorageService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UtilService.html" data-type="entity-link">UtilService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${
              isNormalMode
                ? 'data-target="#interceptors-links"'
                : 'data-target="#xs-interceptors-links"'
            }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${
              isNormalMode
                ? 'id="interceptors-links"'
                : 'id="xs-interceptors-links"'
            }>
                    <li class="link">
                        <a href="interceptors/ApiPrefixInterceptor.html" data-type="entity-link">ApiPrefixInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/ErrorHandlerInterceptor.html" data-type="entity-link">ErrorHandlerInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${
                   isNormalMode
                     ? 'data-target="#guards-links"'
                     : 'data-target="#xs-guards-links"'
                 }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"'}>
                <li class="link">
                    <a href="guards/AuthenticationGuard.html" data-type="entity-link">AuthenticationGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${
                  isNormalMode
                    ? 'data-target="#interfaces-links"'
                    : 'data-target="#xs-interfaces-links"'
                }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${
              isNormalMode
                ? ' id="interfaces-links"'
                : 'id="xs-interfaces-links"'
            }>
                    <li class="link">
                        <a href="interfaces/Credentials.html" data-type="entity-link">Credentials</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ErrorMessageObject.html" data-type="entity-link">ErrorMessageObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/HttpClient.html" data-type="entity-link">HttpClient</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/LoginPayload.html" data-type="entity-link">LoginPayload</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RootObject.html" data-type="entity-link">RootObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SignupPayload.html" data-type="entity-link">SignupPayload</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${
              isNormalMode
                ? 'data-target="#miscellaneous-links"'
                : 'data-target="#xs-miscellaneous-links"'
            }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${
              isNormalMode
                ? 'id="miscellaneous-links"'
                : 'id="xs-miscellaneous-links"'
            }>
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
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
      this.innerHTML = tp.strings;
    }
  }
);
