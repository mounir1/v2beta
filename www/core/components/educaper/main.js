// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.core.educaper', [])

.constant('mmCoreSettingsReportInBackground', 'mmCoreReportInBackground')
    .constant('mmCoreSettingsRichTextEditor', 'mmCoreSettingsRichTextEditor')
    .constant('mmCoreSettingsSyncOnlyOnWifi', 'mmCoreSyncOnlyOnWifi')

.config(function($stateProvider) {

    $stateProvider

        .state('site.mm_educaper', {
        url: '/mm_educaper',
        views: {
            'site': {
                templateUrl: 'core/components/educaper/templates/educaper.html',
                controller: 'mmEducaperCtrl'
            }
        }
    })

    .state('site.mm_educaper-dashboard', {
        url: '/mm_educaper-dashboard',
        views: {
            'site': {
                templateUrl: 'core/components/educaper/templates/dashboard.html',
                controller: 'mmDashboardCtrl'
            }
        }
    })

    .state('site.mm_educaper-departments', {
        url: '/mm_educaper-departments',
        views: {
            'site': {
                templateUrl: 'core/components/educaper/templates/departments.html',
                controller: 'mmDepartmentsCtrl'
            }
        }
    })

    .state('site.mm_educaper-rate', {
        url: '/mm_educaper-end',
        views: {
            'site': {
                templateUrl: 'core/components/educaper/templates/rate.html'

            }
        }
    })

    .state('site.mm_educaper-comment', {
        url: '/mm_educaper-comment',
        views: {
            'site': {
                templateUrl: 'core/components/educaper/templates/comment.html'

            }
        }
    })

    .state('site.mm_educaper-about', {
        url: '/mm_educaper-about',
        views: {
            'site': {
                templateUrl: 'core/components/educaper/templates/about.html',
                controller: 'mmEducaperAboutCtrl'
            }
        }
    });

    // .state('site.mm_settings-synchronization', {
    //     url: '/mm_settings-synchronization',
    //     views: {
    //         'site': {
    //             templateUrl: 'core/components/settings/templates/synchronization.html',
    //             controller: 'mmSettingsSynchronizationCtrl'
    //         }
    //     }
    // });

})

.run(function($mmEvents, mmCoreEventLogin, mmCoreEventSiteUpdated, mmCoreEventLogout, $mmSettingsDelegate,
    mmCoreEventRemoteAddonsLoaded) {
    $mmEvents.on(mmCoreEventLogin, $mmSettingsDelegate.updateHandlers);
    $mmEvents.on(mmCoreEventSiteUpdated, $mmSettingsDelegate.updateHandlers);
    $mmEvents.on(mmCoreEventRemoteAddonsLoaded, $mmSettingsDelegate.updateHandlers);
    $mmEvents.on(mmCoreEventLogout, $mmSettingsDelegate.clearSiteHandlers);
});