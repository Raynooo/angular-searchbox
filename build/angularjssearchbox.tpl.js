angular.module("angularjssearchbox").run(["$templateCache", function($templateCache) {$templateCache.put("templates/searchBox.html","<pre ng-show=\"debug\">Model: {{selected.key | json}} Value : {{ selected.value | json}} opened : {{ opened }}</pre>\r\n<div class=\"SB-search\">\r\n    <div class=\"SB-search-box-wrapper form-control SB-search-box \" >\r\n        <div class=\"SB-icon SB-icon-search\"><span class=\"glyphicon glyphicon-search\"></span></div>\r\n        <div class=\"SB-placeholder\" ng-click=\"selectInputFacet()\"></div>\r\n        <div class=\"SB-search-inner\" >\r\n            <div class=\"search_parameter\" ng-class=\"{ selected : $index == selectedResult }\"\r\n                 ng-repeat=\"parameter in sbResultList\" ng-click=\"selectResult($index)\"\r\n                 repeat-done>\r\n                <div class=\"search_parameter_remove SB-icon SB-icon-cancel\" ng-click=\"removeFilter($index)\"><span class=\"glyphicon glyphicon-remove\"></span></div>\r\n                <div class=\"key\">{{ getFacetLabel(parameter.key) }}</div>\r\n                <div class=\"value\"  ng-if=\"(parameter.type == null || parameter.type == \'string\')\"><span class=\"SB-inputSizer\" >{{ parameter.value }}</span>\r\n                <input type=\"text\"\r\n                       data-tah-index=\"{{ $index }}\"\r\n                       ng-model=\"parameter.value\"\r\n                       class=\"form-control SB-inputValue\"\r\n                       limit=\"8\"\r\n                       data-trigger=\"focus\"\r\n                       data-min-length=\"0\"\r\n                       data-container=\"body\"\r\n                       ng-options=\"element.label as element.label + \' (\' +element.count+\')\' for element in getValues(parameter.key,parameter.value) | filter:{label:$viewValue}\"\r\n                       sb-focus sb-typeahead ng-options-watch=\"sbFacetList\">\r\n                </div>\r\n                <div class=\"input-append input-group value\" ng-if=\"parameter.type == \'date\'\">\r\n                    <span class=\"SB-inputSizer\" >{{ parameter.value }}</span>\r\n                    <input type=\"text\"\r\n                           data-tah-index=\"{{ $index }}\"\r\n                           ng-model=\"parameter.value\"\r\n                           ng-if=\"parameter.type == \'date\'\"\r\n                           class=\"form-control SB-inputValue\"\r\n                           value=\"{{ parameter.value || toDay }}\"\r\n                           date-range\r\n                           date-range-options=\"dateOptionsDate\"\r\n                           date-range-change=\"changeEventDateRange\"\r\n                           sb-focus >\r\n                </div>\r\n                <div class=\"input-append input-group value\" ng-if=\"parameter.type == \'range\'\">\r\n                    <span class=\"SB-inputSizer\" >{{ parameter.value }}</span>\r\n                    <input type=\"text\"\r\n                           data-tah-index=\"{{ $index }}\"\r\n                           ng-model=\"parameter.value\"\r\n                           ng-if=\"parameter.type == \'range\'\"\r\n                           class=\"form-control SB-inputValue\"\r\n                           value=\"{{ parameter.value || toDay }}\"\r\n                           date-range\r\n                           date-range-options=\"dateOptionsRange\"\r\n                           date-range-change=\"changeEventDateRange\"\r\n                           sb-focus >\r\n                </div>\r\n                <div class=\"input-append input-group value\" ng-if=\"parameter.type == \'dateOrRange\'\">\r\n                    <span class=\"SB-inputSizer tgdaterange\" >{{ parameter.value }}</span>\r\n                    <input type=\"text\"\r\n                           data-tah-index=\"{{ $index }}\"\r\n                           ng-model=\"parameter.value\"\r\n                           ng-if=\"parameter.type == \'dateOrRange\'\"\r\n                           class=\"form-control SB-inputValue\"\r\n                           value=\"{{ parameter.value || toDay}}\"\r\n                           date-range\r\n                           date-range-options=\"dateOptions\"\r\n                           date-range-tbutton=\"true\"\r\n                           date-range-change=\"changeEventDateRange\"\r\n                           sb-focus >\r\n                </div>\r\n            </div>\r\n            </div>\r\n            <div class=\"search_parameter input-facet\">\r\n            <input\r\n                   data-min-length=\"0\"\r\n                   type=\"text\"\r\n                   ng-model=\"selected.key\"\r\n                   data-limit=\"30\"\r\n                   data-trigger=\"focus\"\r\n                   data-container=\"body\"\r\n                   data-delay=\"{ show: 500, hide: 0 }\"\r\n                   ng-options=\"element as element.label for element in sbFacetList | filter:{label:$viewValue}\"\r\n                   class=\"form-control\" sb-typeahead ng-options-watch=\"sbFacetList\">\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"SB-icon SB-icon-cancel SB-cancel-search-box\" title=\"clear search\" ng-click=\"removeAll()\"><span class=\"glyphicon glyphicon-remove-circle\"></span></div>\r\n    </div>\r\n</div>\r\n<pre ng-show=\"debug\" style=\"margin-top: 10px;\">sbResultList: {{sbResultList | json}} </pre>\r\n<pre ng-show=\"debug\">resultList (input/output): {{resultList | json}} </pre>\r\n<pre ng-show=\"debug\">sbFacetList (input): {{sbFacetList | json}} </pre>\r\n");
$templateCache.put("templates/typeAhead.html","<ul tabindex=\"-1\" class=\"typeahead dropdown-menu\" ng-show=\"$isVisible()\" role=\"select\">\n  <li role=\"presentation\" ng-repeat=\"match in $matches\" ng-class=\"{active: $index == $activeIndex}\">\n    <a role=\"menuitem\" tabindex=\"-1\" ng-click=\"$select($index, $event)\" ng-bind=\"match.label\"></a>\n  </li>\n</ul>\n");}]);