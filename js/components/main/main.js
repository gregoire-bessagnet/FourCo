angular.module("components")

    .component("main", {

        templateUrl: '/js/components/main/main.html',

        controller: function ($transitions,$log) {

            $transitions.onBefore({}, (trans) => {
                $log.debug('onBefore ' + trans._targetState._identifier);
            });
            $transitions.onStart({}, (trans) => {
                $log.debug('onStart ' + trans._targetState._identifier);
            });
            $transitions.onError({}, (trans) => {
                $log.debug('onError ' + trans._targetState._identifier);
            });
            $transitions.onSuccess({}, (trans) => {
                $log.debug('onSuccess ' + trans._targetState._identifier);
            });
            $transitions.onEnter({}, (trans, params) => {
                $log.debug('onEnter ' + trans._targetState._identifier);
            });
            $transitions.onRetain({}, (trans, params) => {
                $log.debug('onRetain ' + trans._targetState._identifier);
            });
            $transitions.onExit({}, (trans, params) => {
                $log.debug('onExit ' + trans._targetState._identifier);
            });
            $transitions.onFinish({}, (trans) => {
                $log.debug('onFinish ' + trans._targetState._identifier);
            });
        }

    })
