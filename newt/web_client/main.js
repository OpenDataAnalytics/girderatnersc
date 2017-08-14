/* eslint-disable import/first */

import router from 'girder/router';
import events from 'girder/events';

import Login from './Login';

router.route('', 'jobView', function (id) {
    events.trigger('g:navigateTo', Login, {
    });
});

// router.route('jobs/user/:id(/:view)', 'jobList', function (id, view) {
//     events.trigger('g:navigateTo', JobListWidget, {
//         filter: { userId: id },
//         view: view,
//         showGraphs: true,
//         showFilters: true,
//         showPageSizeSelector: true
//     });
// });

// router.route('jobs(/:view)', 'allJobList', function (view) {
//     events.trigger('g:navigateTo', JobListWidget, {
//         allJobsMode: true,
//         view: view,
//         showGraphs: true,
//         showFilters: true,
//         showPageSizeSelector: true
//     });
// });
