import _ from 'underscore';
import $ from 'jquery';

import { restRequest } from 'girder/rest';
import View from 'girder/views/View';
import events from 'girder/events';
import template from './Login.pug';


var Login = View.extend({
    events: {
        'submit .something': (e) => {
            e.preventDefault();
            $.post({
                
            })
        }
    },
    initialize: function (settings) {
        this.render();
    },

    render: function () {
        $('body').empty();
        this.setElement($('body'));

        this.$el.html(template());

        return this;
    }
});

export default Login;
