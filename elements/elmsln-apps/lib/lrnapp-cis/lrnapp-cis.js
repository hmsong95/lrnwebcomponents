import { LitElement, html, css } from "lit-element/lit-element.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/paper-item/paper-item.js";
import "@lrnwebcomponents/simple-modal/lib/simple-modal-template.js";
import "@polymer/paper-listbox/paper-listbox.js";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@polymer/app-route/app-location.js";
import "@polymer/app-route/app-route.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-toast/paper-toast.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/lrndesign-course-banner/lrndesign-course-banner.js";
import "@lrnwebcomponents/lrn-icon/lrn-icon.js";
import "@lrnwebcomponents/lrnsys-button/lrnsys-button.js";
import "@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js";
import "@lrnwebcomponents/lrnsys-layout/lib/lrnsys-dialog.js";
import "@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js";
import "@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js";
import { materialCssStyles } from "@lrnwebcomponents/materializecss-styles/lib/colors.js";
import "./lrnapp-cis-course-card.js";
/**
 `lrnapp-cis`
 A learning application for visualizing course information and listing.

@demo ../../demo/index.html

@microcopy - the mental model for this app
 - cis - Course Information System
 -

*/

class LrnappCis extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      materialCssStyles,
      css`
        :host {
          display: block;
          align-content: center;
        }
        #loading {
          width: 100%;
          z-index: 1000;
          opacity: 0.9;
          padding: 4em 0 0 0;
          text-align: center;
          align-content: center;
          justify-content: center;
          height: 100vh;
          position: absolute;
          background-color: white;
        }
        #dialog {
          width: 80vw;
        }
        iron-selector {
          line-height: 1em;
        }
        iron-selector lrnsys-button {
          display: inline-flex;
        }
        paper-button.coursecard-wrapper {
          margin: 0;
          padding: 0;
        }
        paper-button.coursecard-wrapper:focus {
          outline: blue solid 1px;
        }
        lrnapp-cis-course-card {
          padding: 0;
          margin: 1em;
          height: 15em;
          width: 14em;
        }
        .courses-grid {
          margin: 0 auto;
          width: 95%;
        }
        .iron-selected .display-mode {
          background-color: #ff6f00;
          color: white;
        }
        .list-container {
          display: block;
          flex-direction: column;
          min-height: 50vh;
          flex: 1 1 auto;
        }
        .list-container .coursecard-wrapper {
          display: inline-flex;
        }
        .dialog-header {
          height: unset !important;
          padding: 0 !important;
        }
        .course-dialog-heading.lrndesign-course-banner {
          font-size: 1em;
          height: 4em !important;
        }
        #coursedetails {
          margin-top: 1em;
        }
        #confirm {
          max-width: 400px;
          max-height: 300px;
        }
        .buttons {
          text-align: center;
        }
        .buttons paper-button {
          width: 10em;
          height: 4em;
        }
        .dialog-body {
          padding: 1em;
          font-size: 1.8em;
          text-align: center;
          margin: 0 auto;
        }
        .dialog-body lrn-icon.service-confirm-icon {
          width: 5em;
          height: 5em;
        }
        .dialog-body responsive-grid-col {
          height: 4.5em;
        }
        .dialog-body lrndesign-avatar.service-confirm-icon {
          display: inline-block;
        }
      `
    ];
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.courses = [];
    this.originalCourses = [];
    this.programs = [];
    this.academics = [];
    this.endPoint = "/";
    this.basePath = "/";
    this.queryParams = {};
    this.data = {};
    this.activeCourse = {};
    this._activeService = {};
    setTimeout(() => {
      this.addEventListener("route-change", this._routeChange.bind(this));
    }, 0);
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      <iron-ajax
        auto
        .url="${this.sourcePath}"
        handle-as="json"
        @last-response-changed="${this.__cisResponseChanged}"
        @response="${this._handleResponse}"
      ></iron-ajax>
      <iron-ajax
        .url="${this.courseDataPath}"
        handle-as="json"
        id="courserequest"
        @last-response-changed="${this.__courseResponseChanged}"
        @response="${this._handleCourseResponse}"
      ></iron-ajax>
      <iron-ajax
        .url="${this.makeServicePath}"
        handle-as="json"
        id="makeservice"
        @last-response-changed="${this.__makeServiceResponseChanged}"
        @response="${this._handleMakeServiceResponse}"
      ></iron-ajax>
      <div id="loading">
        <elmsln-loading color="grey-text" size="large"></elmsln-loading>
        <h3>Loading..</h3>
      </div>
      <app-toolbar class="">
        <span main-title=""></span>
        <span
          top-item=""
          style="text-align:right;font-size:.5em;padding-right:1em;"
          >Displaying ${this.courses.length} of
          ${this.originalCourses.length}</span
        >
        <paper-dropdown-menu
          label="Course"
          ?hidden="${this.courses.length == 0 ? true : false}"
        >
          <paper-listbox
            slot="dropdown-content"
            class="dropdown-content"
            .selected="${this.queryParams.course}"
            @selected-changed="${this._queryParamsCourseChanged}"
            attr-for-selected="item-id"
          >
            <paper-item>-- Any --</paper-item>
            ${this.originalCourses.map(
              course => html`
                <paper-item item-id="${course.id}">
                  ${course.attributes.name}
                </paper-item>
              `
            )}
          </paper-listbox>
        </paper-dropdown-menu>
        <paper-dropdown-menu
          label="Program"
          ?hidden="${this.programs.length == 0 ? true : false}"
        >
          <paper-listbox
            slot="dropdown-content"
            class="dropdown-content"
            .selected="${this.queryParams.program}"
            @selected-changed="${this._queryParamsProgramChanged}"
            attr-for-selected="item-id"
          >
            <paper-item>-- Any --</paper-item>
            ${this.programs.map(
              program => html`
                <paper-item item-id="${program.id}">
                  ${program.attributes.name}
                </paper-item>
              `
            )}
          </paper-listbox>
        </paper-dropdown-menu>
        <paper-dropdown-menu
          label="Academic home"
          ?hidden="${this.academics.length == 0 ? true : false}"
        >
          <paper-listbox
            slot="dropdown-content"
            class="dropdown-content"
            .selected="${this.queryParams.academic}"
            @selected-changed="${this._queryParamsAcademicChanged}"
            attr-for-selected="item-id"
          >
            <paper-item>-- Any --</paper-item>
            ${this.academics.map(
              academic => html`
                <paper-item item-id="${academic.id}">
                  ${academic.attributes.name}
                </paper-item>
              `
            )}
          </paper-listbox>
        </paper-dropdown-menu>
      </app-toolbar>
      <div class="courses-grid">
        <div class="list-container">
          ${this.courses.map(
            course => html`
              <paper-button
                data-course-id="${course.id}"
                class="coursecard-wrapper"
                @click="${this._loadCourseUrl}"
              >
                <lrnapp-cis-course-card
                  elevation="2"
                  data-course-id="${course.id}"
                  .name="${course.attributes.name}"
                  .image="${course.attributes.image}"
                  .title="${course.attributes.title}"
                  .color="${course.attributes.color}"
                >
                </lrnapp-cis-course-card>
              </paper-button>
            `
          )}
        </div>
      </div>
      <app-location
        .route="${this.route}"
        @route-changed="${this.__routeChangedEvent}"
        .query-params="${this.queryParams}"
        @query-params-changed="${this.queryParamsChanged}"
      ></app-location>
      <app-route
        .route="${this.route}"
        @route-changed="${this.__routeChangedEvent}"
        pattern="${this.endPoint}/:page"
        .tail="${this.tail}"
        @tail="${this.__tailChanged}"
        .data="${this.data}"
        @data="${this.__dataChanged}"
        .query-params="${this.queryParams}"
        @query-params-changed="${this.queryParamsChanged}"
      >
      </app-route>
      <paper-dialog id="dialog" with-backdrop>
        <h2>Course details</h2>
        <paper-dialog-scrollable>
          <div class="dialog-header">
            ${this.activeCourse.attributes
              ? html`
                  <lrndesign-course-banner
                    .image="${this.activeCourse.attributes.image}"
                    .name="${this.activeCourse.attributes.name}"
                    .title="${this.activeCourse.attributes.title}"
                    .color="${this.activeCourse.attributes.color} darken-4"
                  >
                  </lrndesign-course-banner>
                `
              : ``}
          </div>
          <div id="coursedetails">
            ${this.activeCourse.attributes
              ? html`
                  <responsive-grid-row gutter="5">
                    <responsive-grid-col xl="6" lg="6" md="6" sm="12" xs="12">
                      <div class="column">
                        <h4>Details</h4>
                        <ul>
                          <li
                            ?hidden="${!this.activeCourse.relationships.academic
                              .attributes.name}"
                          >
                            Academic unit:
                            ${this.activeCourse.relationships.academic
                              .attributes.name}
                          </li>
                          <li
                            ?hidden="${!this.activeCourse.relationships.program
                              .attributes.name}"
                          >
                            Program:
                            ${this.activeCourse.relationships.program.attributes
                              .name}
                          </li>
                        </ul>
                        <h4>Learning Network</h4>
                        ${this.activeCourse.topology
                          ? html`
                              ${this.activeCourse.topology.Network.map(
                                service => html`
                                  ${service._exists
                                    ? html`
                                        <lrnsys-button
                                          raised=""
                                          href="${service.url}"
                                          hover-class="${service.color} lighten-4"
                                        >
                                          <lrn-icon
                                            icon="${service.icon}"
                                            class="elmsln-hover-icon"
                                          ></lrn-icon>
                                          <span>${service.title}</span>
                                        </lrnsys-button>
                                      `
                                    : html`
                                        <lrnsys-button
                                          raised=""
                                          @click="${this._makeService}"
                                          color="grey lighten-4"
                                          icon-class="grey lighten-5"
                                          data-machine-name="${service.machine_name}"
                                        >
                                          <lrn-icon
                                            data-machine-name="${service.machine_name}"
                                            icon="${service.icon}"
                                            class="elmsln-hover-icon"
                                          ></lrn-icon>
                                          <span
                                            data-machine-name="${service.machine_name}"
                                            >Make the ${service.title}
                                            service</span
                                          >
                                        </lrnsys-button>
                                      `}
                                `
                              )}
                            `
                          : ``}
                      </div>
                    </responsive-grid-col>
                    <responsive-grid-col xl="6" lg="6" md="6" sm="12" xs="12">
                      <div class="column">
                        <h4>Operations</h4>
                        ${this.activeCourse.meta.canUpdate
                          ? html`
                    <lrnsys-button
                      raised=""
                      href="${this.activeCourse.uris.edit}"
                      label="Edit"
                      hover-class="green lighten-4"
                      icon="create"
                    ></lrnsys-button>
                    <lrnsys-button
                      raised=""
                      href="${this.activeCourse.uris.addOffering}"
                      label="Add offering"
                      hover-class="amber lighten-3"
                      icon="icons:add"
                    ></lrnsys-button>
                  </template>
                  <lrnsys-button
                    raised=""
                    href="${this.activeCourse.uris.offerings}"
                    label="Offerings"
                    hover-class="amber lighten-4"
                    icon="social:people"
                  ></lrnsys-button>
                  <lrnsys-button
                    raised=""
                    href="${this.activeCourse.uris.sync}"
                    label="Sync Roster"
                    hover-class="amber lighten-4"
                    icon="notification:sync"
                  ></lrnsys-button>
                  <lrnsys-button
                    raised=""
                    href="${this.activeCourse.uris.uri}"
                    label="Course page (legacy)"
                    hover-class="brown lighten-4"
                    icon="delete"
                  ></lrnsys-button>
                  ${
                    this.activeCourse.meta.canDelete
                      ? html`
                          <div
                            style="padding: 1em;width: 100%;margin: .5em 0;display: block;background-color:#FF2222;color:#ffffff;border: 1px solid #222222;"
                          >
                            <h4>Danger zone</h4>
                            <lrnsys-button
                              raised=""
                              href="${this.activeCourse.uris.delete}"
                              label="Delete"
                              hover-class="red lighten-1"
                              color="red lighten-3"
                              icon="delete"
                            ></lrnsys-button>
                          </div>
                        `
                      : html``
                  }
                `
                          : html``}
                      </div>
                    </responsive-grid-col>
                  </responsive-grid-row>
                  <p>${this.activeCourse.attributes.body}</p>
                `
              : ``}
          </div>
        </paper-dialog-scrollable>
      </paper-dialog>
      ${this.activeCourse.attributes
        ? html`
            <lrnsys-dialog id="confirm">
              <div class="dialog-header" slot="header">
                Add this to the
                <strong>${this.activeCourse.attributes.title}</strong> network?
              </div>
              <div class="dialog-body">
                <responsive-grid-row gutter="5">
                  <responsive-grid-col
                    xl="3"
                    lg="3"
                    md="3"
                    sm="3"
                    xs="3"
                  ></responsive-grid-col>
                  <responsive-grid-col xl="1" lg="1" md="1" sm="1" xs="1"
                    >Add</responsive-grid-col
                  >
                  <responsive-grid-col xl="2" lg="2" md="2" sm="2" xs="2"
                    ><lrn-icon
                      icon="${this._activeService.icon}"
                      class="${this._activeService
                        .color}-text elmsln-hover-icon service-confirm-icon"
                    ></lrn-icon
                  ></responsive-grid-col>
                  <responsive-grid-col xl="3" lg="3" md="3" sm="3" xs="3"
                    ><strong
                      >${this._activeService.title}</strong
                    ></responsive-grid-col
                  >
                  <responsive-grid-col
                    xl="3"
                    lg="3"
                    md="3"
                    sm="3"
                    xs="3"
                  ></responsive-grid-col>
                </responsive-grid-row>
                <responsive-grid-row gutter="5">
                  <responsive-grid-col
                    xl="3"
                    lg="3"
                    md="3"
                    sm="3"
                    xs="3"
                  ></responsive-grid-col>
                  <responsive-grid-col xl="1" lg="1" md="1" sm="1" xs="1"
                    >To</responsive-grid-col
                  >
                  <responsive-grid-col xl="2" lg="2" md="2" sm="2" xs="2"
                    ><lrndesign-avatar
                      class="service-confirm-icon"
                      label="${this.activeCourse.attributes.name}"
                      jdenticon=""
                      color="${this.activeCourse.attributes.color} darken-4"
                    >
                    </lrndesign-avatar
                  ></responsive-grid-col>
                  <responsive-grid-col xl="3" lg="3" md="3" sm="3" xs="3"
                    ><strong
                      >${this.activeCourse.attributes.title}</strong
                    ></responsive-grid-col
                  >
                  <responsive-grid-col
                    xl="3"
                    lg="3"
                    md="3"
                    sm="3"
                    xs="3"
                  ></responsive-grid-col>
                </responsive-grid-row>
                <div style="margin-top:1em;">This will take a few moments.</div>
              </div>
              <div class="buttons">
                <paper-button
                  raised=""
                  dialog-confirm=""
                  autofocus=""
                  @click="${this._confirmBuild}"
                  class="green"
                  >Let's do it!</paper-button
                >
                <paper-button dialog-dismiss="" class="red-text"
                  >Oops, go back.</paper-button
                >
              </div>
            </lrnsys-dialog>
          `
        : ``}
      <paper-toast id="toast"></paper-toast>
    `;
  }
  queryParamsChanged(e) {
    this.queryParams = { ...e.detail.value };
  }
  __tailChanged(e) {
    this.tail = e.detail.value;
  }
  __dataChanged(e) {
    this.data = { ...e.detail.value };
  }
  _dataPageChanged(e) {
    let data = this.data;
    data.page = e.detail.value;
    this.data = { ...data };
  }
  _queryParamsAcademicChanged(e) {
    let queryParams = this.queryParams;
    queryParams.academic = e.detail.value;
    if (queryParams.academic == null) {
      delete queryParams.academic;
    }
    this.queryParams = { ...queryParams };
  }
  _queryParamsProgramChanged(e) {
    let queryParams = this.queryParams;
    queryParams.program = e.detail.value;
    if (queryParams.program == null) {
      delete queryParams.program;
    }
    this.queryParams = { ...queryParams };
  }
  _queryParamsCourseChanged(e) {
    let queryParams = this.queryParams;
    queryParams.course = e.detail.value;
    if (queryParams.course == null) {
      delete queryParams.course;
    }
    this.queryParams = { ...queryParams };
  }
  __courseResponseChanged(e) {
    this._courseResponse = e.detail.value;
  }
  __makeServiceResponseChanged(e) {
    this._makeServiceResponse = e.detail.value;
  }
  __cisResponseChanged(e) {
    this._cisResponse = e.detail.value;
  }
  static get tag() {
    return "lrnapp-cis";
  }
  __routeChangedEvent(e) {
    this.route = e.detail.value;
  }
  /**
   * LitElement properties changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (["route", "endPoint"].includes(propName)) {
        _routeChanged(this.route, this.endPoint);
      }
      if (["originalCourses", "queryParams"].includes(propName)) {
        this.courses = [
          ...this._coursesCompute(this.originalCourses, this.queryParams)
        ];
      }
      if (propName === "originalCourses") {
        // notify
        this.dispatchEvent(
          new CustomEvent("original-courses-changed", {
            detail: {
              value: this[propName]
            }
          })
        );
      }
      if (propName === "queryParams") {
        // notify
        this.dispatchEvent(
          new CustomEvent("query-params-changed", {
            detail: {
              value: this[propName]
            }
          })
        );
      }
    });
  }
  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      _activeService: {
        type: Object
      },
      elmslnCourse: {
        type: String,
        attribute: "elmsln-course"
      },
      elmslnSection: {
        type: String,
        attribute: "elmsln-section"
      },
      basePath: {
        type: String,
        attribute: "base-path"
      },
      csrfToken: {
        type: String,
        attribute: "csrf-token"
      },
      endPoint: {
        type: String,
        attribute: "end-point"
      },

      /**
       * The load initial data
       */
      _cisResponse: {
        type: Object
      },

      /**
       * Load individual course data
       */
      _courseResponse: {
        type: Object
      },

      /**
       * Load service creation response
       */
      _makeServiceResponse: {
        type: Object
      },

      /**
       * The courses to render; potentially filtered
       */
      courses: {
        type: Array
      },

      /**
       * The original courses array; used to filter against
       */
      originalCourses: {
        type: Array
      },

      /**
       * The programs to render
       */
      programs: {
        type: Array
      },

      /**
       * The academics to render
       */
      academics: {
        type: Array
      },

      /**
       * sourcePath for data.
       */
      sourcePath: {
        type: String,
        attribute: "source-path"
      },

      /**
       * pathway to access info about a single course.
       */
      courseDataPath: {
        type: String,
        attribute: "course-data-path"
      },

      /**
       * pathway to creating new service instances
       */
      makeServicePath: {
        type: String,
        attribute: "make-service-path"
      },

      /**
       * Endpoint for data.
       */
      endPoint: {
        type: String,
        attribute: "end-point"
      },
      /**
       * Active / clicked course.
       */
      activeCourse: {
        type: Array
      },
      queryParams: {
        type: Object
      }
    };
  }

  _routeChanged(route, endPoint) {
    if (typeof route.path === "string") {
      if (typeof endPoint === "string") {
        // ignore "home page" as well since that's our path
        if (route.path.startsWith(endPoint) || route.path == "/") {
          return;
        }
      }
      if (this.shadowRoot) {
        this.shadowRoot.querySelector("#loading").hidden = false; // reload the page which since route changed will load that page
      }
      window.location.reload();
    }
  }
  /**
   * Change route from deeper in the app.
   */

  _routeChange(e) {
    var details = e.detail;
    let queryParams = this.queryParams;
    let data = this.data;
    if (typeof details.queryParams.course !== typeof undefined) {
      queryParams.course = details.queryParams.course;
    }

    if (typeof details.queryParams.academic !== typeof undefined) {
      queryParams.academic = details.queryParams.academic;
    }

    if (typeof details.queryParams.program !== typeof undefined) {
      queryParams.program = details.queryParams.program;
    }

    if (typeof details.data.page !== typeof undefined) {
      data.page = details.data.page;
    }
    this.data = { ...data };
    this.queryParams = { ...queryParams };
  }
  /**
   * Simple way to convert from object to array.
   */

  _toArray(obj) {
    if (obj == null) {
      return [];
    }

    return Object.keys(obj).map(function(key) {
      return obj[key];
    });
  }
  /**
   * Handle course response for additional details about the item
   */

  _handleMakeServiceResponse(event) {
    // get the CIS response's data and convert to array ahead of time
    var response = this._makeServiceResponse;

    let activeCourse = this.__addServiceLinks(response.data.course);

    this.activeCourse = activeCourse;
    this.shadowRoot.querySelector("#toast").show(response.message);
  }
  /**
   * Handle course response for additional details about the item
   */

  _handleCourseResponse(event) {
    // get the CIS response's data and convert to array ahead of time
    var activeCourse = this._courseResponse.data.course;

    this.__addServiceLinks(activeCourse);
    this.activeCourse = activeCourse;
  }
  /**
   * Helper to mash up services that exist with those that could.
   */

  __addServiceLinks(courseObject) {
    // ensure there's a part for the Network people can request
    if (typeof courseObject.topology.Network === typeof undefined) {
      courseObject.topology.Network = {};
    } // loop our services to see what we should add as options

    for (var key in this.services) {
      // if it's not in the topology that means it can be added
      if (
        typeof courseObject.topology.Network[
          this.services[key].attributes.machine_name
        ] === typeof undefined
      ) {
        // if we get a miss that means we should add a "Add this" version
        courseObject.topology.Network[
          this.services[key].attributes.machine_name
        ] = {
          color: this.services[key].attributes.color,
          distro: this.services[key].attributes.distro,
          icon: this.services[key].attributes.icon,
          machine_name: this.services[key].attributes.machine_name,
          title: this.services[key].attributes.title,
          url: this.services[key].attributes.url,
          weight: this.services[key].attributes.weight,
          _exists: false
        };
      }
    } // convert to array after keys in place for the object

    courseObject.topology.Network = this._toArray(
      courseObject.topology.Network
    ); // sort items based on weight of the things in the network
    // so we have a consistent order to things

    courseObject.topology.Network.sort(function(a, b) {
      return a.weight - b.weight;
    });
    return courseObject;
  }
  /**
   * Handle response for the whole courses object.
   */

  _handleResponse(event) {
    var course = {};
    var program = {};
    var academic = {};
    var tmp = {
      courses: [],
      programs: [],
      academics: []
    };
    var programs = [];
    var academics = []; // get the CIS response's data and convert to array ahead of time

    var courses = this._toArray(this._cisResponse.data.courses);

    this.services = [...this._toArray(this._cisResponse.data.services)];
    this.originalCourses = [...courses];
    for (var index = 0; index < courses.length; index++) {
      course = courses[index];
      program = courses[index].relationships.program;
      academic = courses[index].relationships.academic;
      tmp.programs[program.id] = program;
      tmp.academics[academic.id] = academic;
      tmp.courses[course.id] = course;
    } // this is stupid but we have to normalize the IDs or else dom repeats will be screwed up

    tmp.programs.forEach(function(element) {
      programs.push(element);
    }); // this is stupid but we have to normalize the IDs or else dom repeats will be screwed up

    tmp.academics.forEach(function(element) {
      academics.push(element);
    });
    this.shadowRoot.querySelector("#loading").hidden = true;
    this.academics = [...academics];
    this.programs = [...programs];
  }
  /**
   * Request a new service to kick off.
   */

  _makeService(e) {
    let active = e.target.getAttribute("data-machine-name");
    const network = this.activeCourse.topology.Network;
    let service = network.filter(service => {
      if (service.machine_name !== active) {
        return false;
      }

      return true;
    }); // if we found one, make it the top level item

    if (service.length > 0) {
      service = service.pop();
      this.shadowRoot.querySelector("#makeservice").params = {
        course: this.activeCourse.attributes.machine_name,
        service: service.machine_name
      };
      this._activeService = { ...service }; // confirm via paper prompt

      this.shadowRoot.querySelector("#confirm").toggleDialog();
    } else {
      console.log("that was not a valid service..");
    }
  }
  /**
   * Confirm of build.
   */

  _confirmBuild(e) {
    this.shadowRoot.querySelector("#makeservice").generateRequest();
  }

  /**
   * Handle tap on paper-button above to redirect to the correct course url.
   */

  _loadCourseUrl(e) {
    // reset dialog to appear to be loading
    var local = e.target; // this will have the id of the current course

    var active = local.getAttribute("data-course-id"); // find the course by it's unique id and filter just to it

    let findCourse = this.originalCourses.filter(course => {
      if (course.id !== active) {
        return false;
      }

      return true;
    }); // if we found one, make it the top level item

    if (findCourse.length > 0) {
      findCourse = findCourse.pop();
    }

    this.activeCourse = findCourse; // formulate the post data

    this._courseDataParams = {
      id: this.activeCourse.id
    }; // @todo look at query cache mechanism to skip calls
    // if they've already happened. lrnapp-book has some stuff to do this
    this.shadowRoot.querySelector(
      "#courserequest"
    ).params = this._courseDataParams;
    this.shadowRoot.querySelector("#courserequest").generateRequest();
    this.shadowRoot.querySelector("#dialog").toggle();
  }
  /**
   * Compute the active list of courses
   */

  _coursesCompute(originalCourses, queryParams) {
    // if we don't have an original courses object to work with then we need to bail
    if (typeof originalCourses === "undefined") {
      return [];
    } // define vars

    let filteredCourses = []; // filter the courses by the query params

    filteredCourses = originalCourses.filter(course => {
      if (typeof this.queryParams.course !== "undefined") {
        if (course.id !== this.queryParams.course) {
          return false;
        }
      }

      if (typeof this.queryParams.program !== "undefined") {
        if (course.relationships.program.id !== this.queryParams.program) {
          return false;
        }
      }

      if (typeof this.queryParams.academic !== "undefined") {
        if (course.relationships.academic.id !== this.queryParams.academic) {
          return false;
        }
      }
      return true;
    }); // delay and repaint, can help with refresh issues
    return filteredCourses;
  }
  /**
   * Shadow Hijack
   */
  //createRenderRoot() {
  //  return this;
  //}
}

window.customElements.define(LrnappCis.tag, LrnappCis);
export { LrnappCis };
