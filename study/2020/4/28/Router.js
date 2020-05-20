class Router {
    constructor(props) {
        this.mode = obj.mode;
        this.routes = {
            '/index' : 'views/index/index',
            '/index/detail': 'views/index/detail/detail',
            '/index/detail/more'  : 'views/index/detail/more/more',
            '/subscribe'          : 'views/subscribe/subscribe',
            '/proxy'              : 'views/proxy/proxy',
            '/state'              : 'views/state/stateDemo',
            '/state/sub'          : 'views/state/components/subState',
            '/dom'                : 'views/visualDom/visualDom',
            '/error'              : 'views/error/error'
        }
        this.init()
    }

}