import React from "react";

const LazyLoader = (importComp, fallback) => {
	return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                component: null, 
            }
        }

        componentDidMount() {
			importComp().then((comp) => this.setState({ component: comp.default }));
		}

		render() {
			const C = this.state.component;
			return C ? (
				<C {...this.props} />
			) : fallback ? (
				fallback
			) : (
				<div>loading</div>
			);
		}
	};
};
export default LazyLoader;



/**         ------For lazy loading------- 
 
1.Import this component.   --    import LazyLoader from './components/LazyLoader';
2.import a component which we want to implement lazy loading using this HOC.
  ex: 
  const Home = LazyLoader(() => import("./pages/Home"),'Redirecting you to home page....');
  const Login = LazyLoader(() => import("./pages/Login"),'Redirecting you to login page....');
  const Register = LazyLoader(() => import("./pages/Register"),'Redirecting you to register page...');

first argument is component path and second argument is text for fallback UI which is optional.

*/