import React from 'react';
export const loaderRef:any = React.createRef();

export function showLoader() {
    let ref:any = loaderRef.current
    if (ref) {
        ref.showLoader()
    }
}

export function hideLoader() {
    let ref:any = loaderRef.current
    if (ref) {
        ref.hideLoader()
    }
}

class AppLoader extends React.Component {
    state = { isLoading: true }

    showLoader() {
        console.log("show") ;
        this.setState({ isLoading: true }) ;
    }

    hideLoader() {
        console.log("hide") ;
        this.setState({ isLoading: false }) ;
    }

    render() {
        return (
            <div className="loader" hidden={!this.state.isLoading}></div>
        );
    }
};

export default AppLoader ;