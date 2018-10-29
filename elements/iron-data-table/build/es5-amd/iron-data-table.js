define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js",
  "./lib/data-table-column.js",
  "./lib/data-table-column-sort.js",
  "./lib/data-table-cell.js",
  "./lib/data-table-row.js",
  "./lib/data-table-checkbox.js",
  "./lib/data-table-row-detail.js",
  "./lib/array-datasource.js"
], function(_polymerLegacy, _polymerDom, _ironResizableBehavior) {
  "use strict";
  var _Mathfloor = Math.floor,
    _Mathmin = Math.min;
  function _templateObject_6f7a6040db1411e8a264c998b4b370c6() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n        position: relative;\n        overflow-x: auto;\n        overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        /* Default height just to help users get started in making stuff visible.  */\n        height: 400px;\n        @apply(--iron-data-table);\n      }\n\n      #container {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        display: flex;\n        flex-direction: column;\n      }\n\n      #header {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n        transition: box-shadow 200ms;\n        -webkit-transition: box-shadow 200ms;\n        z-index: 1;\n        @apply(--iron-data-table-header);\n      }\n\n      #header.scrolled {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 2px 0 rgba(0, 0, 0, 0.075), 0 3px 0 rgba(0, 0, 0, 0.05), 0 4px 0 rgba(0, 0, 0, 0.015);\n      }\n\n      #list {\n        overflow-x: hidden !important;\n        overflow-y: auto !important;\n        flex: 1;\n        transition: opacity 200ms;\n        -webkit-transition: opacity 200ms;\n      }\n\n      :host([loading]) #list {\n        opacity: 0.25;\n      }\n\n      :host(:not([loading])) paper-spinner-lite {\n        display: none;\n      }\n\n      :host([loading]) paper-spinner-lite {\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        --paper-spinner-color: var(--default-primary-color);\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <data-table-row header="">\n          <data-table-checkbox header="" hidden$="[[!multiSelection]]" on-tap="_toggleSelectAll" checked="[[_isSelectAllChecked(selectedItems.length, selectedItems.inverted, size)]]" indeterminate="[[_isSelectAllIndeterminate(selectedItems.length, size)]]"></data-table-checkbox>\n          <template is="dom-repeat" items="[[columns]]" as="column">\n            <data-table-cell header="" align-right="[[column.alignRight]]" before-bind="[[beforeCellBind]]" column="[[column]]" flex="[[column.flex]]" hidden="[[column.hidden]]" order="[[column.order]]" table="[[_this]]" template="[[column.headerTemplate]]" width="[[column.width]]">\n              <data-table-column-sort sort-order="[[sortOrder]]" path="[[column.sortBy]]" on-sort-direction-changed="_sortDirectionChanged" hidden$="[[!column.sortBy]]"></data-table-column-sort>\n            </data-table-cell>\n          </template>\n        </data-table-row>\n      </div>\n\n      <iron-list id="list" as="item" items="[[_cachedItems]]" on-scroll="_onVerticalScroll">\n        <template>\n          <div class="item">\n            <data-table-row before-bind="[[beforeRowBind]]" even$="[[!_isEven(index)]]" expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]" index="[[index]]" item="[[item]]" tabindex="-1" selected="[[_isSelected(item, selectedItems, selectedItems.*)]]">\n              <data-table-checkbox hidden$="[[!multiSelection]]" tabindex="0" checked="[[_isSelected(item, selectedItems, selectedItems.*)]]" on-tap="_onCheckBoxTap"></data-table-checkbox>\n              <template is="dom-repeat" items="[[columns]]" as="column" index-as="colIndex">\n                <data-table-cell template="[[column.template]]" table="[[_this]]" align-right="[[column.alignRight]]" column="[[column]]" expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]" flex="[[column.flex]]" hidden="[[column.hidden]]" index="[[index]]" item="[[item]]" on-click="_onCellClick" order="[[column.order]]" selected="[[_isSelected(item, selectedItems, selectedItems.*)]]" width="[[column.width]]" before-bind="[[beforeCellBind]]"></data-table-cell>\n              </template>\n              <template is="dom-if" if="[[_isExpanded(item, _expandedItems)]]" on-dom-change="_updateSizeForItem">\n                <data-table-row-detail index="[[index]]" item="[[item]]" expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]" selected="[[_isSelected(item, selectedItems, selectedItems.*)]]" before-bind="[[beforeDetailsBind]]" table="[[_this]]" template="[[rowDetail]]"></data-table-row-detail>\n              </template>\n            </data-table-row>\n          </div>\n        </template>\n      </iron-list>\n    </div>\n    <paper-spinner-lite active=""></paper-spinner-lite>\n    <slot name="data-table-column"></slot>\n    <slot name="template[is=row-detail]"></slot>\n'
      ],
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n        position: relative;\n        overflow-x: auto;\n        overflow-y: hidden;\n        -webkit-overflow-scrolling: touch;\n        /* Default height just to help users get started in making stuff visible.  */\n        height: 400px;\n        @apply(--iron-data-table);\n      }\n\n      #container {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        display: flex;\n        flex-direction: column;\n      }\n\n      #header {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n        transition: box-shadow 200ms;\n        -webkit-transition: box-shadow 200ms;\n        z-index: 1;\n        @apply(--iron-data-table-header);\n      }\n\n      #header.scrolled {\n        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 2px 0 rgba(0, 0, 0, 0.075), 0 3px 0 rgba(0, 0, 0, 0.05), 0 4px 0 rgba(0, 0, 0, 0.015);\n      }\n\n      #list {\n        overflow-x: hidden !important;\n        overflow-y: auto !important;\n        flex: 1;\n        transition: opacity 200ms;\n        -webkit-transition: opacity 200ms;\n      }\n\n      :host([loading]) #list {\n        opacity: 0.25;\n      }\n\n      :host(:not([loading])) paper-spinner-lite {\n        display: none;\n      }\n\n      :host([loading]) paper-spinner-lite {\n        position: absolute;\n        top: 45%;\n        left: 50%;\n        --paper-spinner-color: var(--default-primary-color);\n      }\n    </style>\n    <div id="container">\n      <div id="header">\n        <data-table-row header="">\n          <data-table-checkbox header="" hidden\\$="[[!multiSelection]]" on-tap="_toggleSelectAll" checked="[[_isSelectAllChecked(selectedItems.length, selectedItems.inverted, size)]]" indeterminate="[[_isSelectAllIndeterminate(selectedItems.length, size)]]"></data-table-checkbox>\n          <template is="dom-repeat" items="[[columns]]" as="column">\n            <data-table-cell header="" align-right="[[column.alignRight]]" before-bind="[[beforeCellBind]]" column="[[column]]" flex="[[column.flex]]" hidden="[[column.hidden]]" order="[[column.order]]" table="[[_this]]" template="[[column.headerTemplate]]" width="[[column.width]]">\n              <data-table-column-sort sort-order="[[sortOrder]]" path="[[column.sortBy]]" on-sort-direction-changed="_sortDirectionChanged" hidden\\$="[[!column.sortBy]]"></data-table-column-sort>\n            </data-table-cell>\n          </template>\n        </data-table-row>\n      </div>\n\n      <iron-list id="list" as="item" items="[[_cachedItems]]" on-scroll="_onVerticalScroll">\n        <template>\n          <div class="item">\n            <data-table-row before-bind="[[beforeRowBind]]" even\\$="[[!_isEven(index)]]" expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]" index="[[index]]" item="[[item]]" tabindex="-1" selected="[[_isSelected(item, selectedItems, selectedItems.*)]]">\n              <data-table-checkbox hidden\\$="[[!multiSelection]]" tabindex="0" checked="[[_isSelected(item, selectedItems, selectedItems.*)]]" on-tap="_onCheckBoxTap"></data-table-checkbox>\n              <template is="dom-repeat" items="[[columns]]" as="column" index-as="colIndex">\n                <data-table-cell template="[[column.template]]" table="[[_this]]" align-right="[[column.alignRight]]" column="[[column]]" expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]" flex="[[column.flex]]" hidden="[[column.hidden]]" index="[[index]]" item="[[item]]" on-click="_onCellClick" order="[[column.order]]" selected="[[_isSelected(item, selectedItems, selectedItems.*)]]" width="[[column.width]]" before-bind="[[beforeCellBind]]"></data-table-cell>\n              </template>\n              <template is="dom-if" if="[[_isExpanded(item, _expandedItems)]]" on-dom-change="_updateSizeForItem">\n                <data-table-row-detail index="[[index]]" item="[[item]]" expanded="[[_isExpanded(item, _expandedItems, _expandedItems.*)]]" selected="[[_isSelected(item, selectedItems, selectedItems.*)]]" before-bind="[[beforeDetailsBind]]" table="[[_this]]" template="[[rowDetail]]"></data-table-row-detail>\n              </template>\n            </data-table-row>\n          </div>\n        </template>\n      </iron-list>\n    </div>\n    <paper-spinner-lite active=""></paper-spinner-lite>\n    <slot name="data-table-column"></slot>\n    <slot name="template[is=row-detail]"></slot>\n'
      ]
    );
    _templateObject_6f7a6040db1411e8a264c998b4b370c6 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_6f7a6040db1411e8a264c998b4b370c6()
    ),
    is: "iron-data-table",
    behaviors: [_ironResizableBehavior.IronResizableBehavior],
    listeners: {
      "column-filter-changed": "_onColumnFilterChanged",
      "iron-resize": "_resizeCellContainers",
      "item-changed": "_itemChanged",
      scroll: "_onHorizontalScroll"
    },
    properties: {
      autoRefresh: Number,
      beforeCellBind: Object,
      beforeDetailsBind: Object,
      beforeRowBind: Object,
      items: { type: Array },
      detailsEnabled: { type: Boolean, value: !1 },
      filter: {
        type: Array,
        notify: !0,
        value: function value() {
          return [];
        }
      },
      multiSelection: { type: Boolean, value: !1 },
      pageSize: { type: Number, value: 50 },
      selectionEnabled: { type: Boolean, value: !1 },
      selectedItem: { type: Object, readOnly: !0, notify: !0 },
      selectedItems: {
        type: Object,
        notify: !0,
        readOnly: !0,
        value: function value() {
          var items = [];
          items.filters = [];
          return items;
        }
      },
      size: { type: Number, notify: !0, value: 0, observer: "_sizeChanged" },
      sortOrder: {
        type: Array,
        notify: !0,
        value: function value() {
          return [];
        }
      },
      columns: {
        type: Array,
        notify: !0,
        value: function value() {
          return [];
        },
        observer: "_columnsChanged"
      },
      dataSource: { type: Object, notify: !0 },
      _pagesLoading: {
        type: Array,
        value: function value() {
          return [];
        }
      },
      loading: { type: Boolean, notify: !0, reflectToAttribute: !0, value: !1 },
      _cachedItems: {
        type: Array,
        value: function value() {
          return [];
        }
      },
      _cachedPages: {
        type: Array,
        value: function value() {
          return [];
        }
      },
      _currentPage: { type: Number, value: 0 },
      _expandedItems: {
        type: Array,
        value: function value() {
          return [];
        }
      },
      _this: {
        type: Object,
        value: function value() {
          return this;
        }
      }
    },
    observers: [
      "_itemsChanged(items.*)",
      "_currentPageChanged(dataSource, _currentPage)",
      "_resetData(dataSource, filter.*, sortOrder.*)"
    ],
    created: function created() {
      this._observer = (0, _polymerDom.dom)(this).observeNodes(
        function(info) {
          var hasColumns = function(node) {
            return (
              node.nodeType === Node.ELEMENT_NODE &&
              "DATA-TABLE-COLUMN" === node.tagName.toUpperCase()
            );
          };
          if (
            0 < info.addedNodes.filter(hasColumns).length ||
            0 < info.removedNodes.filter(hasColumns).length
          ) {
            this.set(
              "columns",
              this.getContentChildren("[select=data-table-column]")
            );
            this.notifyResize();
          }
          if (
            0 <
            info.addedNodes.filter(function hasDetails(node) {
              return (
                node.nodeType === Node.ELEMENT_NODE &&
                "TEMPLATE" === node.tagName.toUpperCase() &&
                node.hasAttribute("is") &&
                "row-detail" === node.getAttribute("is")
              );
            }).length
          ) {
            this.set(
              "rowDetail",
              this.getContentChildren('[select="template[is=row-detail]"]')[0]
            );
            var parent = (0, _polymerDom.dom)(this.rowDetail).parentNode;
            this.rowDetail._rootDataHost = parent.dataHost
              ? parent.dataHost._rootDataHost || parent.dataHost
              : parent;
          }
        }.bind(this)
      );
    },
    _stopPropagation: function _stopPropagation(e) {
      e.stopImmediatePropagation();
    },
    selectItem: function selectItem(item) {
      if (
        "number" === typeof item &&
        0 <= item &&
        this.items &&
        this.items.length > item
      ) {
        this._selectItem(this.items[item]);
      } else {
        this._selectItem(item);
      }
    },
    _selectItem: function _selectItem(item) {
      this._setSelectedItem(item);
      if (this.multiSelection) {
        if (this.selectedItems.inverted) {
          var index;
          if (-1 < (index = this.selectedItems.indexOf(item))) {
            this.splice("selectedItems", index, 1);
          }
        } else {
          this.push("selectedItems", item);
        }
      } else {
        this.splice("selectedItems", 0, this.selectedItems.length, item);
      }
    },
    deselectItem: function deselectItem(item) {
      if (
        "number" === typeof item &&
        0 <= item &&
        this.items &&
        this.items.length > item
      ) {
        this._deselectItem(this.items[item]);
      } else {
        this._deselectItem(item);
      }
    },
    _deselectItem: function _deselectItem(item) {
      this._setSelectedItem(null);
      var index = this.selectedItems.indexOf(item);
      if (this.selectedItems.inverted) {
        if (-1 === index) {
          this.push("selectedItems", item);
        }
      } else {
        if (-1 < index) {
          this.splice("selectedItems", index, 1);
        }
      }
    },
    _isSelected: function _isSelected(item, selectedItems) {
      var selected = -1 < selectedItems.indexOf(item);
      return selectedItems.inverted ? !selected : selected;
    },
    selectAll: function selectAll() {
      var selectedItems = [];
      selectedItems.inverted = !0;
      selectedItems.filters = this.filter.slice(0) || [];
      this._setSelectedItems(selectedItems);
    },
    clearSelection: function clearSelection() {
      var selectedItems = [];
      selectedItems.inverted = !1;
      selectedItems.filters = this.filter.slice(0) || [];
      this._setSelectedItems(selectedItems);
      if (this.selectedItem !== void 0) {
        this._setSelectedItem(null);
      }
    },
    _toggleSelectAll: function _toggleSelectAll() {
      if (
        this._isSelectAllChecked(
          this.selectedItems.length,
          this.selectedItems.inverted,
          this.size
        )
      ) {
        this._fireEvent(
          "deselecting-all-items",
          { items: this.selectedItems },
          this.clearSelection
        );
      } else {
        this._fireEvent(
          "selecting-all-items",
          { items: this.selectedItems },
          this.selectAll
        );
      }
    },
    _isSelectAllChecked: function _isSelectAllChecked(
      selectedItemsLength,
      inverted,
      size
    ) {
      return 0 < size && selectedItemsLength === (inverted ? 0 : size);
    },
    _isSelectAllIndeterminate: function _isSelectAllIndeterminate(
      length,
      size
    ) {
      return 0 < size && 0 < length && length < size;
    },
    _isEven: function _isEven(index) {
      return 0 === index % 2;
    },
    _resetData: function _resetData() {
      this.clearSelection();
      this.clearCache();
      this.$.list.scrollToIndex(0);
    },
    _sortDirectionChanged: function _sortDirectionChanged(e) {
      for (var i = 0; i < this.sortOrder.length; i++) {
        if (this.sortOrder[i].path === e.detail.path) {
          if (e.detail.direction) {
            this.set("sortOrder." + i + ".direction", e.detail.direction);
          } else {
            this.splice("sortOrder", i, 1);
          }
          return;
        }
      }
      this.push("sortOrder", {
        path: e.detail.path,
        direction: e.detail.direction
      });
    },
    _columnsChanged: function _columnsChanged(columns, oldColumns) {
      if (oldColumns) {
        oldColumns.forEach(
          function(column) {
            this.unlisten(column, "filter-value-changed");
          }.bind(this)
        );
      }
      if (columns) {
        columns.forEach(
          function(column) {
            column.table = this;
            this.listen(
              column,
              "filter-value-changed",
              "_onColumnFilterChanged"
            );
          }.bind(this)
        );
      }
    },
    _onColumnFilterChanged: function _onColumnFilterChanged(e) {
      for (var i = 0; i < this.filter.length; i++) {
        if (this.filter[i].path === e.detail.filterBy) {
          this.set("filter." + i + ".filter", e.detail.value);
          this.set("selectedItems.filters." + i + ".filter", e.detail.value);
          return;
        }
      }
      this.push("filter", { path: e.detail.filterBy, filter: e.detail.value });
      this.push("selectedItems.filters", {
        path: e.detail.filterBy,
        filter: e.detail.value
      });
    },
    _resizeCellContainers: function _resizeCellContainers() {
      this.$.container.style.width = "";
      this.async(
        function() {
          this.$.container.style.width =
            _Mathmin(this.scrollWidth, this.clientWidth + this.scrollLeft) +
            "px";
          this.$.header.style.paddingRight =
            this.$.list.offsetWidth - this.$.list.clientWidth + "px";
        }.bind(this)
      );
    },
    _onHorizontalScroll: function _onHorizontalScroll() {
      if (!this.isDebouncerActive("scrolling")) {
        this.$.container.style.width = this.scrollWidth + "px";
        this.debounce(
          "scrolling",
          function() {
            this.$.container.style.width =
              _Mathmin(this.scrollWidth, this.clientWidth + this.scrollLeft) +
              "px";
          },
          1e3
        );
      }
    },
    _onVerticalScroll: function _onVerticalScroll() {
      this.toggleClass("scrolled", 1 <= this.$.list.scrollTop, this.$.header);
      this._currentPage = Math.max(
        0,
        _Mathfloor(
          this.$.list.scrollTop / this.$.list._physicalAverage / this.pageSize
        )
      );
    },
    _itemsChanged: function _itemsChanged(items) {
      if (
        ("items" === items.path || "items.splices" === items.path) &&
        Array.isArray(items.base)
      ) {
        this.size = items.base.length;
        this.dataSource = new ArrayDataSource(items.base);
      } else if (
        0 === items.path.indexOf("items.#") &&
        Array.isArray(items.base)
      ) {
        var index = items.path.split(".")[1].substring(1),
          item = this.items[index],
          cachedIndex = this._cachedItems.indexOf(item);
        if (0 <= cachedIndex) {
          this.set(
            items.path
              .replace("items.", "_cachedItems.")
              .replace("#" + index, cachedIndex),
            items.value
          );
        }
      }
    },
    _itemChanged: function _itemChanged(e) {
      if (this.items) {
        var index = this.items.indexOf(e.detail.item);
        if (0 <= index) {
          this.set("items." + index + "." + e.detail.path, e.detail.value);
        }
      }
      if (this.autoRefresh !== void 0) {
        this.debounce(
          "auto-refresh",
          function() {
            this.refreshPage(this._currentPage);
          },
          this.autoRefresh
        );
      }
    },
    _currentPageChanged: function _currentPageChanged(dataSource, page) {
      if (!this._isPageCached(page)) {
        this.loading = !0;
      }
      this.debounce(
        "loading",
        function() {
          this._loadPage(dataSource, page);
          if (page + 1 < this.size / this.pageSize) {
            this._loadPage(dataSource, page + 1);
          }
          if (0 < page) {
            this._loadPage(dataSource, page - 1);
          }
        }.bind(this),
        100
      );
    },
    _isPageLoading: function _isPageLoading(page) {
      return -1 < this._pagesLoading.indexOf(page);
    },
    _addLoadingPage: function _addLoadingPage(page) {
      if (!this._isPageLoading(page)) {
        this.push("_pagesLoading", page);
      }
      this.loading = 0 < this._pagesLoading.length;
    },
    _removeLoadingPage: function _removeLoadingPage(page) {
      var index = this._pagesLoading.indexOf(page);
      if (-1 !== index) {
        this.splice("_pagesLoading", index, 1);
      }
      this.loading = 0 < this._pagesLoading.length;
    },
    _isPageCached: function _isPageCached(page) {
      return this._cachedPages && -1 < this._cachedPages.indexOf(page);
    },
    _loadPage: function _loadPage(dataSource, page) {
      if (this._isPageCached(page)) {
        this._removeLoadingPage(page);
      } else if (!this._isPageLoading(page)) {
        this._addLoadingPage(page);
        var success = function(items, size) {
            this.push("_cachedPages", page);
            if (size !== void 0) {
              this.size = size;
            }
            for (
              var start = page * this.pageSize, i = 0;
              i < this.pageSize;
              i++
            ) {
              var index = start + i,
                item = items[i];
              this.set("_cachedItems." + index, item);
              this.$.list._collection.store[index] = item;
              if (item && "object" == babelHelpers.typeof(item)) {
                this.$.list._collection.omap.set(item, index);
              } else {
                this.$.list._collection.pmap[item] = index;
              }
            }
            this.debounce(
              "resizing",
              function() {
                this.$.list.notifyResize();
              }.bind(this),
              100
            );
            this._removeLoadingPage(page);
          }.bind(this),
          err = function() {
            this._removeLoadingPage(page);
          }.bind(this);
        dataSource(
          {
            page: page,
            pageSize: this.pageSize,
            filter: this.filter,
            sortOrder: this.sortOrder
          },
          success,
          err
        );
      }
    },
    _sizeChanged: function _sizeChanged(size, oldSize) {
      if (
        this._cachedItems &&
        Math.abs(this._cachedItems.length - size) < 2 * this.pageSize
      ) {
        while (this._cachedItems.length < size) {
          this.push("_cachedItems", {});
        }
        while (this._cachedItems.length > size) {
          this.pop("_cachedItems");
        }
      } else {
        var items = [];
        while (items.length < size) {
          items.push({});
        }
        this.set("_cachedItems", items);
      }
      if (size > oldSize) {
        var oldLastPage = _Mathfloor(oldSize / this.pageSize);
        if (this._isPageCached(oldLastPage) || 0 === oldLastPage) {
          this.refreshPage(oldLastPage);
        }
      }
    },
    clearCache: function clearCache() {
      this._cachedPages = [];
      this.refreshPage(this._currentPage);
    },
    refreshPage: function refreshPage(page) {
      if (this._cachedPages) {
        var index = this._cachedPages.indexOf(page);
        if (-1 < index) {
          this.splice("_cachedPages", index, 1);
        }
      }
      this._currentPageChanged(this.dataSource, page);
    },
    _updateSizeForItem: function _updateSizeForItem(event) {
      if (event.model.get("item")) {
        for (
          var itemSet = [], i = 0;
          i < this.$.list._physicalItems.length;
          i++
        ) {
          itemSet.push(i);
        }
        this.$.list._updateMetrics(itemSet);
        this.$.list._positionItems();
      }
    },
    expandItem: function expandItem(item) {
      if (
        this.rowDetail &&
        this._expandedItems &&
        !this._isExpanded(item, this._expandedItems)
      ) {
        this._expandedItems.push(item);
        this._expandedItems = this._expandedItems.slice(0);
      }
    },
    collapseItem: function collapseItem(item) {
      if (
        this.rowDetail &&
        this._expandedItems &&
        this._isExpanded(item, this._expandedItems)
      ) {
        var index = this._expandedItems.indexOf(item);
        this._expandedItems.splice(index, 1);
        this._expandedItems = this._expandedItems.slice(0);
      }
    },
    _isExpanded: function _isExpanded(item, items) {
      return items && -1 < items.indexOf(item);
    },
    _isFocusable: function _isFocusable(target) {
      if ((void 0).useNativeShadow) {
        return 0 <= target.tabIndex;
      } else {
        return (
          target.contains((0, _polymerDom.dom)(document.activeElement).node) ||
          "A" === target.tagName.toUpperCase()
        );
      }
    },
    _onCellClick: function _onCellClick(e) {
      if (this._isFocusable((0, _polymerDom.dom)(e).localTarget)) {
      } else {
        if (this.rowDetail && this.detailsEnabled) {
          if (this._isExpanded(e.model.item, this._expandedItems)) {
            this._fireEvent("collapsing-item", e.model.item, this.collapseItem);
          } else {
            this._fireEvent("expanding-item", e.model.item, this.expandItem);
          }
        }
        if (this.selectionEnabled) {
          if (this._isSelected(e.model.item, this.selectedItems)) {
            this._fireEvent(
              "deselecting-item",
              e.model.item,
              this.deselectItem
            );
          } else {
            this._fireEvent("selecting-item", e.model.item, this.selectItem);
          }
        }
      }
    },
    _fireEvent: function _fireEvent(eventName, item, defaultAction) {
      var e = this.fire(eventName, { item: item }, { cancelable: !0 });
      if (!e.defaultPrevented) {
        defaultAction.call(this, item);
      }
    },
    _onCheckBoxTap: function _onCheckBoxTap(e) {
      if (this._isSelected(e.model.item, this.selectedItems)) {
        this._fireEvent("deselecting-item", e.model.item, this.deselectItem);
      } else {
        this._fireEvent("selecting-item", e.model.item, this.selectItem);
      }
    }
  });
});
