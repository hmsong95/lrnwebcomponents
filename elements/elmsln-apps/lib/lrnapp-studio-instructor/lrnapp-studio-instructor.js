import { LitElement, html, css } from "lit-element/lit-element.js";
import "@polymer/app-route/app-location.js";
import "@polymer/app-route/app-route.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@polymer/paper-toggle-button/paper-toggle-button.js";
import "@polymer/paper-item/paper-item.js";
import "@polymer/paper-badge/paper-badge.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-icon-button/paper-icon-button.js";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";
import "@vaadin/vaadin-grid/vaadin-grid.js";
import "@vaadin/vaadin-grid/vaadin-grid-filter.js";
import "@vaadin/vaadin-grid/vaadin-grid-sorter.js";
import "@vaadin/vaadin-grid/vaadin-grid-column-group.js";
import "@vaadin/vaadin-grid/vaadin-grid-selection-column.js";
import "@lrnwebcomponents/elmsln-loading/elmsln-loading.js";
import "@lrnwebcomponents/lrndesign-chart/lib/lrndesign-bar.js";
import "@lrnwebcomponents/lrndesign-chart/lib/lrndesign-line.js";
import "@lrnwebcomponents/lrndesign-chart/lib/lrndesign-pie.js";
import "@lrnwebcomponents/simple-picker/simple-picker.js";
import "@lrnwebcomponents/lrnsys-button/lrnsys-button.js";
import "@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js";
import "@polymer/paper-dialog/paper-dialog.js";
import "@lrnwebcomponents/materializecss-styles/materializecss-styles.js";
import "@lrnwebcomponents/elmsln-apps/lib/lrnapp-studio-submission/lrnapp-studio-submission.js";
import { materialCssStyles } from "@lrnwebcomponents/materializecss-styles/lib/colors.js";

class LrnappStudioInstructor extends LitElement {
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
          padding: 0.8em;
        }
        paper-dialog {
          width: 70vw;
          min-height: 50vh;
        }
        vaadin-grid-table-body > vaadin-grid-cell-content {
          height: unset !important;
        }
        app-toolbar {
          background-color: #4285f4;
          color: #fff;
          margin: 20px 0;
        }
        #loading {
          width: 100%;
          z-index: 1000;
          opacity: 0.8;
          text-align: center;
          align-content: center;
          justify-content: center;
          height: 100vh;
          position: absolute;
          background-color: white;
        }
        .center-data {
          text-align: center;
        }
        vaadin-grid {
          height: 75vh;
          font-family: Roboto, sans-serif;
          --divider-color: rgba(0, 0, 0, var(--dark-divider-opacity));

          --vaadin-grid-cell: {
            padding: 0;
          }

          --vaadin-grid-header-cell: {
            height: 3.5em;
            color: rgba(0, 0, 0, var(--dark-secondary-opacity));
            font-size: 1em;
          }

          --vaadin-grid-body-cell: {
            height: 3em;
            color: rgba(0, 0, 0, var(--dark-primary-opacity));
            font-size: 0.8em;
          }

          --vaadin-grid-body-row-hover-cell: {
            background-color: var(--paper-grey-200);
          }

          --vaadin-grid-body-row-selected-cell: {
            background-color: var(--paper-grey-100);
          }

          --vaadin-grid-focused-cell: {
            box-shadow: none;
            font-weight: bold;
          }
        }

        vaadin-grid .cell {
          overflow: hidden;
          text-overflow: ellipsis;
          padding-right: 56px;
        }

        vaadin-grid .cell.last {
          padding-right: 24px;
        }

        vaadin-grid .cell.numeric {
          text-align: right;
        }

        vaadin-grid paper-checkbox {
          --primary-color: var(--paper-indigo-500);
          margin: 0 24px;
        }

        vaadin-grid vaadin-grid-sorter .cell {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        vaadin-grid vaadin-grid-sorter iron-icon {
          transform: scale(0.8);
        }

        vaadin-grid vaadin-grid-sorter:not([direction]) iron-icon {
          color: rgba(0, 0, 0, var(--dark-disabled-opacity));
        }

        vaadin-grid vaadin-grid-sorter[direction] {
          color: rgba(0, 0, 0, var(--dark-primary-opacity));
        }

        vaadin-grid vaadin-grid-sorter[direction="desc"] iron-icon {
          transform: scale(0.8) rotate(180deg);
        }
        vaadin-grid-sorter {
          text-align: center;
        }

        lrndesign-avatar {
          display: inline-block;
        }
        .avatar-label {
          display: inline-block;
          margin-left: 0.2em;
        }
        .assignment-button {
          height: 1em;
        }
        .project-button {
          height: 1em;
        }
        paper-badge {
          top: 0 !important;
          left: unset !important;
          right: 0;
          z-index: 1;
        }
        .avatar-link {
          color: black;
        }
        .avatar-link paper-button {
          text-transform: unset;
        }
        #selectedproject {
          display: inline-block;
        }
        #datatype {
          display: inline-block;
          vertical-align: middle;
          --paper-toggle-button-checked-bar-color: var(--paper-green-500);
          --paper-toggle-button-checked-button-color: var(--paper-green-500);
          --paper-toggle-button-checked-ink-color: var(--paper-green-500);
          --paper-toggle-button-unchecked-bar-color: var(--paper-amber-900);
          --paper-toggle-button-unchecked-button-color: var(--paper-amber-900);
          --paper-toggle-button-unchecked-ink-color: var(--paper-amber-900);
        }
        .comment-list {
          list-style-image: none;
          display: inline-block;
          padding: 0;
          margin: 0;
        }
        .stats-text {
          font-size: 0.8em;
          font-style: italic;
          line-height: 1em;
          padding: 0 0 0 2em;
          display: inline-block;
          text-align: right;
        }
        #selectedchart {
          padding-left: 8px;
        }
      `
    ];
  }
  render() {
    return html`
    <custom-style>
    <style>
      vaadin-grid {
        --vaadin-grid-cell: {
          padding: 0;
        };

        --vaadin-grid-header-cell: {
          height: 3.5em;
          color: rgba(0, 0, 0, var(--dark-secondary-opacity));
          font-size: 1em;
        };

        --vaadin-grid-body-cell: {
          height: 3em;
          color: rgba(0, 0, 0, var(--dark-primary-opacity));
          font-size: .8em;
        };

        --vaadin-grid-body-row-hover-cell: {
          background-color: var(--paper-grey-200);
        };

        --vaadin-grid-body-row-selected-cell: {
          background-color: var(--paper-grey-100);
        };

        --vaadin-grid-focused-cell: {
          box-shadow: none;
          font-weight: bold;
        };
      }
    </style>
    </custom-style>
    <app-location 
      .route="${this.route}"
      @route-changed="${this.routeChangedEvent}"
    ></app-location>
    <app-route
      .route="${this.route}"
      @route-changed="${this.routeChangedEvent}"
      pattern="${this.endPoint}/submissions/:submission"
      .data="${this.data}"
      @data-changed="${this.dataChangedEvent}"
      .tail="${this.tail}"
      @tail-changed="${this.tailChangedEvent}"  
      >
    </app-route>
    <iron-ajax auto
      id="projectrequest"
      url="${this.sourceProjectPath}"
      handle-as="json"
      @last-response-changed="${this._projectDataChanged}"
      @response="${this._handleProjectResponse}"></iron-ajax>
    <iron-ajax
      id="studentrequest"
      url="${this.sourceStudentPath}"
      .params="${this.studentParams}"
      handle-as="json"
      @last-response-changed="${this._studentDataChanged}"
      @response="${this._handleStudentResponse}"></iron-ajax>
    <div id="loading">
      <h3>Loading..</h3>
      <elmsln-loading color="grey-text" size="large"></elmsln-loading>
    </div>
    <div ?hidden="${
      this.activeProject
    }">Select a project to begin reviewing work</div>
    <dropdown-select id="selectedproject" label="Project">
      ${this._toArray(this.projects).map(
        project => html`
          <paper-item value="${project.id}"
            >${project.attributes.title}</paper-item
          >
        `
      )}
    </dropdown-select>
    <paper-toggle-button id="datatype"
     ?checked="${this.dataType}"
      @checked-changed="${this.checkedChangedEvent}"
      disabled
    >
      ${this.dataTypeText}
    </paper-toggle-button>
    <paper-button id="statsdialogbutton" disabled><iron-icon icon="editor:show-chart"></iron-icon> Statistics (beta)</span></paper-button>
    <paper-dialog id="statsdialog">
      <app-header>
        <app-toolbar>
          <div main-title>${this.stats.header}</div>
          <label for="selectedchart">Graph style</label>
          <simple-picker id="selectedchart" .options="${
            this.simplePickerOptions
          }"></simple-picker>
          <paper-button dialog-dismiss><iron-icon icon="close"></iron-icon> Close</paper-button>
        </app-toolbar>
      </app-header>
      <paper-dialog-scrollable>
        <div class="stats-text">${this.stats.overview}</div>
        <lrndesign-bar
        chart-title="${this.activeChart.title}"
        chart-desc="${this.activeChart.description}"
        .data="${this.activeChart.data}"
        ></lrndesign-bar>
      </paper-dialog-scrollable>
    </paper-dialog>
    <vaadin-grid ?hidden="${!this
      .students}" id="material" aria-label="Student project list" .items="${this._toArray(
      this.students
    )}">
      <vaadin-grid-column resizable>
        <template class="header">
          <vaadin-grid-sorter id="sorter" path="sis.sortable_name">Student</vaadin-grid-sorter>
        </template>
        <template>
          <a href="${
            this.basePath
          }lrnapp-open-studio/projects?author=[[item.id]]&project=${
      this.activeProject
    }" tabindex="-1" target="_blank" class="avatar-link ferpa-protect">
            <paper-button class="avatar-button">
              <lrndesign-avatar label="[[item.name]]" src="[[item.avatar]]"></lrndesign-avatar>
              <span class="avatar-label">[[item.sis.sortable_name]]</span>
            </paper-button>
          </a>
        </template>
        <template class="footer">
          <vaadin-grid-filter aria-label="Student" path="sis.sortable_name" value="[[_filterName]]">
            <paper-input slot="filter" label="Student" value="{{_filterName::input}}" focus-target></paper-input>
          </vaadin-grid-filter>
        </template>
      </vaadin-grid-column>
      ${this._toArray(this.assignments).map(
        assignment => html`
        <vaadin-grid-column resizable>
          <template class="header">
            <span>[[assignment.title]]</span>
          </template>
          <template>
            <template is="dom-if" if="[[_submissionStatus(item, assignment, dataType)]]">
              <template is="dom-if" if="[[!dataType]]">
                <lrnsys-button icon="[[_submissionPiece(item, assignment, 'icon')]]" id="student-[[item.id]]-assignment-[[assignment.id]]-submission-[[_submissionID(item, assignment)]]" label="[[_submissionPiece(item, assignment, 'title')]]" @click="${
                  this._setActiveSubmission
                }">
                </lrnsys-button>
              </template>
              <template is="dom-if" if="[[dataType]]">
                <ul class="comment-list">
                <template is="dom-repeat" items="[[_submissionPiece(item, assignment, 'comments')]]" as="commented">
                  <li>
                    <lrnsys-button icon="communication:comment" id="student-[[item.id]]-assignment-[[assignment.id]]-submission-[[commented]]" label="#[[_commentIndex(index)]]" @click="${
                      this._setActiveComment
                    }">
                    </lrnsys-button>
                  </li>
                </template>
                </ul>
              </template>
            </template>
            <template is="dom-if" if="[[!_submissionStatus(item, assignment, dataType)]]">
              <paper-button disabled class="project-button" id="student-[[item.id]]-assignment-[[assignment.id]]-submission-null">X</paper-button>
            </template>
            <template is="dom-if" if="[[_commentCount(item, assignment, dataType)]]">
              <paper-badge id="student-[[item.id]]-assignment-[[assignment.id]]-tip" for="student-[[item.id]]-assignment-[[assignment.id]]" label="[[_commentCount(item, assignment, dataType)]]"></paper-badge>
              <simple-tooltip for="student-[[item.id]]-assignment-[[assignment.id]]-tip">Comments left on classmates [[assignment.title]]</paper-badge>
            </template>
          </template>
        </vaadin-grid-column>
      `
      )}
    </vaadin-grid>
    <paper-dialog id="dialog" style="overflow: visible;">
      <app-header>
        <app-toolbar>
          <span style="width:15em;">
            <paper-icon-button @click="${
              this._changeActiveItem
            }" id="prevstudent" icon="arrow-upward" title="previous student"></paper-icon-button>
            <paper-icon-button @click="${
              this._changeActiveItem
            }" id="nextstudent" icon="arrow-downward" title="next student"></paper-icon-button>
            <lrndesign-avatar class="ferpa-protect" label="${
              this.activeData.student.name
            }" src="${
      this.activeData.student.avatar
    }" style="display:inline-block;vertical-align:middle;"></lrndesign-avatar>
            <span class="avatar-label ferpa-protect" style="margin-left:1em;">${
              this.activeData.student.sis.sortable_name
            }</span>
          </span>
          <paper-icon-button @click="${
            this._changeActiveItem
          }" id="prevassignment" icon="arrow-back" title="previous assignment" style="margin-left:1em;"></paper-icon-button>
          <paper-icon-button @click="${
            this._changeActiveItem
          }" id="nextassignment" icon="arrow-forward" title="next assignment"></paper-icon-button>
          <span style="font-weight:bold;" main-title>Assignment: ${
            this.activeData.assignment.title
          }</span>
          <paper-button dialog-dismiss><iron-icon icon="close"></iron-icon> Close</paper-button>
        </app-toolbar>
      </app-header>
      <paper-dialog-scrollable>
        ${
          this.activeData.submission && this.data.submission
            ? html`
                <lrnapp-studio-submission-page
                  base-path="${this.basePath}"
                  .route="${this.tail}"
                  @route-changed="${this.tailChangedEvent}"
                  id="${this.data.submission}"
                  end-point="${this.basePath}lrnapp-studio-submission"
                  csrf-token="${this.csrfToken}"
                  data="${this.data}"
                  hide-menu-bar
                ></lrnapp-studio-submission-page>
              `
            : html`
                <div>
                  <h3>No submission for this assignment</h3>
                  <p>
                    This student has not submitted anything for this assignment
                    at this time.
                  </p>
                </div>
              `
        }
      </paper-dialog-scrollable>
    </paper-dialog>`;
  }
  static get tag() {
    return "lrnapp-studio-instructor";
  }
  _studentDataChanged(e) {
    this._studentData = e.detail.value;
  }
  _projectDataChanged(e) {
    this._projectData = e.detail.value;
  }
  tailChangedEvent(e) {
    this.tail = e.detail.value;
  }
  routeChangedEvent(e) {
    this.route = e.detail.value;
  }
  dataChangedEvent(e) {
    this.data = e.detail.value;
  }
  static get properties() {
    return {
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
      sourceProjectPath: {
        type: String
      },
      sourceStudentPath: {
        type: String
      },
      simplePickerOptions: {
        type: Array
      },
      /**
       * Type of data to display, either submission centric or comment centric.
       * False = submission, true = comment
       */
      dataType: {
        type: Boolean
      },
      dataTypeText: {
        type: String
      },
      /**
       * Internal value for mapping the raw response data.
       */
      _projectData: {
        type: Object
      },
      /**
       * studentParams for the request
       */
      studentParams: {
        type: Object
      },
      /**
       * Internal value for mapping the raw response data.
       */
      _studentData: {
        type: Object
      },
      /**
       * Internal width so they are all unified from editing this
       */
      _numWidth: {
        type: String
      },
      /**
       * Endpoint for submission data.
       */
      sourcePath: {
        type: String,
        attribute: "source-path"
      },
      /**
       * The projects to render
       */
      projects: {
        type: Object
      },
      /**
       * The assignments to render
       */
      assignments: {
        type: Object
      },
      /**
       * The submissions to render
       */
      students: {
        type: Object
      },
      /**
       * routing variable for url
       */
      route: {
        type: String
      },
      /**
       * Data binding object for the submission render
       */
      data: {
        type: Object
      },
      /**
       * Internal ID for active project
       */
      activeProject: {
        type: Number
      },
      /**
       * Active Data based on selection
       */
      activeData: {
        type: Object
      },
      /**
       * raw Stats data from backend.
       */
      stats: {
        type: Object
      },
      /**
       * Selected chart with data cleaned up to match formatting.
       */
      activeChart: {
        type: Object
      }
    };
  }
  checkedChangedEvent(e) {
    this.checked = e.detail.value;
  }
  constructor() {
    super();
    this.data = {};
    this.studentParams = {
      projectId: null,
      type: "submission"
    };
    this.simplePickerOptions = [
      [
        {
          alt: "Submissions by Assignment",
          value: "byassignment-submissions"
        }
      ],
      [{ alt: "Comments by Assignment", value: "byassignment-comments" }],
      [
        {
          alt: "Commenters by Assignment",
          value: "byassignment-commenters"
        }
      ]
    ];
    this._numWidth = "2.25em";
    this.dataType = false;
    this.activeChart = {};
    this.stats = {};
    this.activeData = {
      student: {
        sis: {}
      },
      assignment: false,
      submission: false
    };
    this.students = {};
    this.activeProject = null;
    this._projectData = {};
    this.dataTypeText = "Submissions";
  }
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      let notifiedProps = [
        "basePath",
        "sourcePath",
        "students",
        "assignments",
        "projects"
      ];
      if (notifiedProps.includes(propName)) {
        // notify
        let eventName = `${propName
          .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
          .toLowerCase()} -changed`;
        this.dispatchEvent(
          new CustomEvent(eventName, {
            detail: {
              value: this[propName]
            }
          })
        );
      }
      if (propName == "dataType") {
        this._dataTypeChanged(this[propName], oldValue);
      }
      if (["route", "endPoint"].includes(propName)) {
        this._routeChanged(this.route, this.endPoint);
      }
      if (propName == "activeData") {
        this._activeDataChanged(
          this.activeData.student,
          this.activeData.assignment
        );
      }
    });
  }
  /**
   * Rebuild the chart whenever the select list is changed.
   */
  _chartChanged(e) {
    let attr = this.activeChart;
    attr.title = e.detail.value;
    attr.description = "Chart of values relative to " + e.detail.value;
    attr.data = this._formatChartData(e.detail.value);
    this.activeChart = { ...attr };
  }
  /**
   * Format data in a way that chartist likes and that matches
   * the currently active display mechanism
   */
  _formatChartData(type) {
    var labels = [];
    var series = [[]];
    const stats = this.stats.stats;
    const assignments = this._toArray(this.assignments);
    // sanity check
    if (type) {
      let parts = type.split("-");
      if (
        typeof stats[parts[0]] !== typeof undefined &&
        typeof stats[parts[0]][parts[1]] !== typeof undefined
      ) {
        // make sure the data aligns now w/ the IDs in question
        // or we'll start mixing up our data.
        for (var i in assignments) {
          let title = assignments[i].title;
          if (
            typeof stats[parts[0]][parts[1]][assignments[i].id] !==
            typeof undefined
          ) {
            series[0].push(stats[parts[0]][parts[1]][assignments[i].id]);
            title += ` (${stats[parts[0]][parts[1]][assignments[i].id]})`;
          } else {
            series[0].push(0);
            title += " (0)";
          }
          labels.push(title);
        }
      }
    }
    return {
      labels: labels,
      series: series
    };
  }
  /**
   * When type changes, make sure we adjust what the request going
   * out the door will be. For simplicity, false / true for the two
   * modes are binded to submission (default) and comment methods
   * of data return. This allows us to leverage the same endpoint
   * and render things more or less using much of the same code
   * and event
   */
  _dataTypeChanged(newValue, oldValue) {
    // if type changes values and not from undefined to defined
    // then we should execute the request for data after setting type
    if (typeof oldValue !== typeof undefined) {
      if (newValue) {
        this.dataTypeText = "Comments (beta)";
      } else {
        this.dataTypeText = "Submissions";
      }
    }
  }
  /**
   * Stupid thing to make it go from array position 0 to 1.
   */
  _commentIndex(index) {
    return index + 1;
  }
  /**
   * If the current route is outside the scope of our app
   * then allow the website to break out of the single page
   * application routing
   */
  _routeChanged(route, endPoint) {
    if (typeof route.path === "string") {
      if (typeof endPoint === "string") {
        if (route.path.startsWith(endPoint)) {
          return;
        }
      }
      // reload the page which since route changed will load that page
      window.location.reload();
    }
  }
  /**
   * Test if buttons should be visible or not
   */
  _activeDataChanged(student, assignment) {
    if (typeof student.id !== typeof undefined) {
      if (this._getObjectByPosition(this.students, student.id, -1) == -1) {
        this.shadowRoot.querySelector("#prevstudent").disabled = true;
      } else {
        this.shadowRoot.querySelector("#prevstudent").disabled = false;
      }
      if (this._getObjectByPosition(this.students, student.id, 1) == -1) {
        this.shadowRoot.querySelector("#nextstudent").disabled = true;
      } else {
        this.shadowRoot.querySelector("#nextstudent").disabled = false;
      }
      if (
        this._getObjectByPosition(this.assignments, assignment.id, -1) == -1
      ) {
        this.shadowRoot.querySelector("#prevassignment").disabled = true;
      } else {
        this.shadowRoot.querySelector("#prevassignment").disabled = false;
      }
      if (this._getObjectByPosition(this.assignments, assignment.id, 1) == -1) {
        this.shadowRoot.querySelector("#nextassignment").disabled = true;
      } else {
        this.shadowRoot.querySelector("#nextassignment").disabled = false;
      }
    }
  }
  /**
   * Project updated
   */
  _projectChanged(e) {
    this.shadowRoot.querySelector("#loading").hidden = false;
    // default a11y positioning back to the stats dialog
    this.__rememberClick = this.shadowRoot.querySelector("#statsdialogbutton");
    this.shadowRoot.querySelector("#statsdialogbutton").disabled = false;
    this.shadowRoot.querySelector("#datatype").disabled = false;
    this.activeProject = e.detail.value;
    // this should fire off the new request
    this.studentParams.projectId = this.activeProject;
    this.shadowRoot.querySelector("#studentrequest").generateRequest();
  }
  _openStatsDialog(e) {
    this.shadowRoot.querySelector("#statsdialog").toggle();
  }
  /**
   * attached life cycle
   */
  firstUpdated() {
    setTimeout(() => {
      this.shadowRoot
        .querySelector("#statsdialogbutton")
        .addEventListener("click", this._openStatsDialog.bind(this));
      // listen for focus event to have fired
      this.shadowRoot
        .querySelector("#statsdialog")
        .addEventListener("opened-changed", this._accessibleFocus.bind(this));
      this.shadowRoot
        .querySelector("#dialog")
        .addEventListener("opened-changed", this._accessibleFocus.bind(this));
      this.shadowRoot
        .querySelector("#selectedproject")
        .addEventListener("change", this._projectChanged.bind(this));
      this.shadowRoot
        .querySelector("#selectedchart")
        .addEventListener("change", this._chartChanged.bind(this));
    }, 0);
  }
  /**
   * Set ourselves as having focus after the modal closes.
   */
  _accessibleFocus(e) {
    if (!e.detail) {
      document.body.classList.remove("scroll-disabled");
      // focus on our dialog triggering button
      this.__rememberClick.focus();
    }
  }
  /**
   * Handle response for the whole projects object.
   */
  _handleProjectResponse(event) {
    this.shadowRoot.querySelector("#loading").hidden = true;
    this.projects = this._projectData.data.projects;
  }
  /**
   * Handle response for the whole projects object.
   */
  _handleStudentResponse(event) {
    this.shadowRoot.querySelector("#loading").hidden = true;
    this.students = [...this._studentData.data.students];
    this.assignments = [...this._studentData.data.assignments];
    this.stats = this._studentData.data.stats;
    this.stats.header =
      "Statistics for " +
      this.projects["project-" + this.activeProject].attributes.title;
    // make sure default is asc data
    setTimeout(() => {
      this.shadowRoot.querySelector("#sorter").direction = "asc";
    }, 200);
  }
  /**
   * Pie menu operation handler based on which was clicked.
   */
  _changeActiveItem(e) {
    document.body.classList.add("scroll-disabled");
    var local = e.target;
    var newstudent;
    var newassignment;
    // use button id in order to move around in the grid as far as active
    switch (local.id) {
      case "prevstudent":
        newstudent = this._getObjectByPosition(
          this.students,
          this.activeData.student.id,
          -1
        );
        if (
          newstudent != -1 &&
          typeof newstudent.assignments[this.activeData.assignment.id] !==
            typeof undefined
        ) {
          this.activeData.student = { ...newstudent };
          this.activeData.submission = {
            ...newstudent.assignments[this.activeData.assignment.id]
          };
          this.route.path =
            this.endPoint + "/submissions/" + this.activeData.submission.id;
        }
        break;
      case "nextstudent":
        newstudent = this._getObjectByPosition(
          this.students,
          this.activeData.student.id,
          1
        );
        if (
          newstudent != -1 &&
          typeof newstudent.assignments[this.activeData.assignment.id] !==
            typeof undefined
        ) {
          this.activeData.student = { ...newstudent };
          this.activeData.submission = {
            ...newstudent.assignments[this.activeData.assignment.id]
          };
          this.route.path =
            this.endPoint + "/submissions/" + this.activeData.submission.id;
        }
        break;
      case "prevassignment":
        newassignment = this._getObjectByPosition(
          this.assignments,
          this.activeData.assignment.id,
          -1
        );
        if (newassignment != -1) {
          this.activeData.assignment = { ...newassignment };
          if (
            typeof this.activeData.student.assignments[newassignment.id].id !==
            typeof undefined
          ) {
            this.activeData.submission = {
              ...this.activeData.student.assignments[newassignment.id]
            };
            this.route.path =
              this.endPoint +
              "/submissions/" +
              this.activeData.student.assignments[newassignment.id].id;
          } else {
            this.activeData.submission = false;
          }
        }
        break;
      case "nextassignment":
        newassignment = this._getObjectByPosition(
          this.assignments,
          this.activeData.assignment.id,
          1
        );
        if (newassignment != -1) {
          this.activeData.assignment = { ...newassignment };
          if (
            typeof this.activeData.student.assignments[newassignment.id].id !==
            typeof undefined
          ) {
            this.activeData.submission = {
              ...this.activeData.student.assignments[newassignment.id]
            };
            this.route.path =
              this.endPoint +
              "/submissions/" +
              this.activeData.student.assignments[newassignment.id].id;
          } else {
            this.activeData.submission = false;
          }
        }
        break;
    }
  }
  /**
   * Helper to move back and forth in an object like you can an array
   */
  _getObjectByPosition(items, key, i) {
    var keys = Object.keys(items).sort(function(a, b) {
      if (typeof items[a].sis !== typeof undefined) {
        if (items[a].sis.sortable_name > items[b].sis.sortable_name) {
          return 1;
        } else if (items[a].sis.sortable_name < items[b].sis.sortable_name) {
          return -1;
        }
        return 0;
      } else {
        return a - b;
      }
    });
    if (key !== undefined) {
      key = key.toString();
    }
    var index = keys.indexOf(key);
    // try fallback for type issues
    if (index == -1) {
      index = keys.indexOf(parseInt(key));
    }
    if ((i == -1 && index > 0) || (i == 1 && index < keys.length - 1)) {
      return items[keys[index + i]];
    } else {
      return -1;
    }
  }
  /**
   * Test student submission status relative to assignments
   */
  _submissionStatus(student, assignment, dataType) {
    if (student != null) {
      if (
        !dataType &&
        typeof student.assignments[assignment.id] !== typeof undefined &&
        typeof student.assignments[assignment.id].id !== typeof undefined
      ) {
        return true;
      } else if (
        dataType &&
        typeof student.assignmentComments[assignment.id] !== typeof undefined &&
        this._toArray(student.assignmentComments[assignment.id]).length > 0
      ) {
        return true;
      }
    }
    return false;
  }
  /**
   * Test student submission status relative to assignments
   */
  _submissionID(student, assignment) {
    if (
      student != null &&
      typeof student.assignments[assignment.id] !== typeof undefined &&
      typeof student.assignments[assignment.id].id !== typeof undefined
    ) {
      return student.assignments[assignment.id].id;
    }
    return false;
  }
  /**
   * Return a piece of the submission needed for visualization bc of template scope
   */
  _submissionPiece(student, assignment, piece) {
    if (
      student != null &&
      typeof student.assignments[assignment.id] !== typeof undefined &&
      typeof student.assignments[assignment.id].id !== typeof undefined
    ) {
      var submission = student.assignments[assignment.id];
      switch (piece) {
        case "url":
          return (
            this.basePath +
            "lrnapp-studio-submission/submissions/" +
            submission.id
          );
          break;
        case "title":
          return submission.attributes.title;
          break;
        case "icon":
          return submission.meta.state_icon;
          break;
        case "color":
          return submission.meta.state_color;
          break;
        case "comments":
          return this._toArray(student.assignmentComments[assignment.id]);
          break;
      }
    }
    return "";
  }
  /**
   * Return number of comments on an assignment for display.
   */
  _commentCount(student, assignment, dataType) {
    if (
      !dataType &&
      student != null &&
      typeof student.assignmentComments[assignment.id] !== typeof undefined
    ) {
      return this._toArray(student.assignmentComments[assignment.id]).length;
    }
    return false;
  }
  /**
   * Set route for active submission to load
   */
  _setActiveSubmission(e) {
    var local = e.target;
    this.__rememberClick = local;
    if (local.id) {
      var item = local.id.split("-");
      // find the active elements
      this.activeData.student = { ...this.students[item[1]] };
      this.activeData.assignment = { ...this.assignments[item[3]] };
      this.activeData.submission = {
        ...this.students[item[1]].assignments[item[3]]
      };
      this.route.path = this.endPoint + "/submissions/" + item[item.length - 1];
      document.body.classList.add("scroll-disabled");
      this.shadowRoot.querySelector("#dialog").toggle();
    }
  }
  /**
   * Set route for active submission via comment click
   */
  _setActiveComment(e) {
    // disable all buttons for in modal nav
    this.shadowRoot.querySelector("#nextassignment").disabled = true;
    this.shadowRoot.querySelector("#prevassignment").disabled = true;
    this.shadowRoot.querySelector("#nextstudent").disabled = true;
    this.shadowRoot.querySelector("#prevstudent").disabled = true;
    var local = e.target;
    this.__rememberClick = local;
    if (local.id) {
      var item = local.id.split("-");
      // find the active elements
      this.activeData.student = { ...this.students[item[1]] };
      this.activeData.assignment = { ...this.assignments[item[3]] };
      this.activeData.submission = {
        ...this.students[item[1]].assignments[item[3]]
      };
      this.route.path = this.endPoint + "/submissions/" + item[item.length - 1];
      document.body.classList.add("scroll-disabled");
      this.shadowRoot.querySelector("#dialog").toggle();
    }
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
}
window.customElements.define(
  LrnappStudioInstructor.tag,
  LrnappStudioInstructor
);
export { LrnappStudioInstructor };
