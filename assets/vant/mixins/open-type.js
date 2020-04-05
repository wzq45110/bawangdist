"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo: function bindGetUserInfo(event) {
            this.$emit('getuserinfo', event.detail);
        },
        bindContact: function bindContact(event) {
            this.$emit('contact', event.detail);
        },
        bindGetPhoneNumber: function bindGetPhoneNumber(event) {
            this.$emit('getphonenumber', event.detail);
        },
        bindError: function bindError(event) {
            this.$emit('error', event.detail);
        },
        bindLaunchApp: function bindLaunchApp(event) {
            this.$emit('launchapp', event.detail);
        },
        bindOpenSetting: function bindOpenSetting(event) {
            this.$emit('opensetting', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4tdHlwZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm9wZW5UeXBlIiwiQmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwiU3RyaW5nIiwibWV0aG9kcyIsImJpbmRHZXRVc2VySW5mbyIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJiaW5kQ29udGFjdCIsImJpbmRHZXRQaG9uZU51bWJlciIsImJpbmRFcnJvciIsImJpbmRMYXVuY2hBcHAiLCJiaW5kT3BlblNldHRpbmciXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQUQsUUFBUUUsUUFBUixHQUFtQkMsU0FBUztBQUN4QkMsZ0JBQVk7QUFDUkYsa0JBQVVHO0FBREYsS0FEWTtBQUl4QkMsYUFBUztBQUNMQyx5QkFBaUIseUJBQVVDLEtBQVYsRUFBaUI7QUFDOUIsaUJBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxNQUFNRSxNQUFoQztBQUNILFNBSEk7QUFJTEMscUJBQWEscUJBQVVILEtBQVYsRUFBaUI7QUFDMUIsaUJBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCRCxNQUFNRSxNQUE1QjtBQUNILFNBTkk7QUFPTEUsNEJBQW9CLDRCQUFVSixLQUFWLEVBQWlCO0FBQ2pDLGlCQUFLQyxLQUFMLENBQVcsZ0JBQVgsRUFBNkJELE1BQU1FLE1BQW5DO0FBQ0gsU0FUSTtBQVVMRyxtQkFBVyxtQkFBVUwsS0FBVixFQUFpQjtBQUN4QixpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0gsU0FaSTtBQWFMSSx1QkFBZSx1QkFBVU4sS0FBVixFQUFpQjtBQUM1QixpQkFBS0MsS0FBTCxDQUFXLFdBQVgsRUFBd0JELE1BQU1FLE1BQTlCO0FBQ0gsU0FmSTtBQWdCTEsseUJBQWlCLHlCQUFVUCxLQUFWLEVBQWlCO0FBQzlCLGlCQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQkQsTUFBTUUsTUFBaEM7QUFDSDtBQWxCSTtBQUplLENBQVQsQ0FBbkIiLCJmaWxlIjoib3Blbi10eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5vcGVuVHlwZSA9IEJlaGF2aW9yKHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBvcGVuVHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGJpbmRHZXRVc2VySW5mbzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldHVzZXJpbmZvJywgZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRDb250YWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY29udGFjdCcsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kR2V0UGhvbmVOdW1iZXI6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdnZXRwaG9uZW51bWJlcicsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kRXJyb3I6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdlcnJvcicsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBiaW5kTGF1bmNoQXBwOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbGF1bmNoYXBwJywgZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpbmRPcGVuU2V0dGluZzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW5zZXR0aW5nJywgZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19