import $ from 'jquery';
import router from 'girder/router';
import { restRequest } from 'girder/rest';
import View from 'girder/views/View';

import template from './Login.pug';
import './Login.styl';

var Login = View.extend({
    events: {
        'submit .login': function (e) {
            e.preventDefault();
            this.login(this.$('input[name=username]').val(), this.$('input[name=password]').val());
            this.loading = true;
            this.render();
        }
    },
    initialize(settings) {
        $('body').empty();
        this.setElement($('body'));

        this.loading = false;
        this.authFailed = false;
        this.render();
    },

    render() {
        this.$el.html(template(this));
        return this;
    },

    login(username, password) {
        $.post({
            url: 'https://newt.nersc.gov/newt/login',
            data: {
                username,
                password
            }
        })
            .then((result) => {
                if (!result.auth) {
                    throw new Error('authentication failed');
                }
                return result;
            })
            .then((result) => {
                var sessionId = result.newt_sessionid;
                return restRequest({
                    method: 'PUT',
                    url: `newt/authenticate/${sessionId}`
                });
            })
            .then((result) => {
                router.navigate('/', { trigger: true });
                location.reload();
                return undefined;
            })
            .catch(() => {
                this.loading = false;
                this.authFailed = true;
                setTimeout(() => {
                    this.authFailed = false;
                    this.render();
                }, 3000);
                this.render();
            });
    }
});

export default Login;
