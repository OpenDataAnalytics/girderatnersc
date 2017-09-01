/* eslint-disable import/first */

import router from 'girder/router';
import events from 'girder/events';
import { fetchCurrentUser } from 'girder/auth';
import FrontPageView from 'girder/views/body/FrontPageView';
import { wrap } from 'girder/utilities/PluginUtils';

import Login from './Login';

router.route('newt', 'newt', function (id) {
    events.trigger('g:navigateTo', Login, {
    });
});

wrap(FrontPageView, 'render', function (render) {
    fetchCurrentUser()
        .done((user) => {
            console.log(user);
            if (!user) {
                router.navigate('/newt', { trigger: true });
            }
        })
    return this;
});
