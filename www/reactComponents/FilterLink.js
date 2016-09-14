import React from 'react';
import Link from './Link'
import { connect } from  'react-redux';
import { setVisibilityFilter } from '../actionCreators/actions';

const mapStateToProps = (state, ownProps) => {
	return {
		active: state.visibilityFilter === ownProps.filter
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: ()=>{
			dispatch(setVisibilityFilter(ownProps.filter));
		}
	}
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

//class FilterLink extends React.Component{
//	componentDidMount(){
//		const { store } = this.context;
//		this.unsubscribe = store.subscribe(() => this.forceUpdate());
//
//	}
//
//	componentWillUnmount(){
//		this.unsubscribe();
//	}
//	render(){
//		const { store } = this.context;
//		const { children, filter } = this.props;
//		const state = store.getState();
//
//		return(<Link active={
//										filter ===
//										state.visibilityFilter
//										}
//									onClick={()=>{
//										store.dispatch({
//											type:'SET_VISIBILITY_FILTER',
//											filter
//										})
//									}}>{children}</Link>
//			);
//
//	}
//}
//
//FilterLink.contextTypes = {
//	store: React.PropTypes.object
//};


export default FilterLink;


