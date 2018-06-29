import * as queryString from 'query-string';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';

import { SearchActions } from '../../actions/search.actions';
import { SearchState } from '../../reducers/search.reducer';
import { AppState } from '../../store/app.store';

import { BlocksTableComponent } from '../../components/blocks-table/blocks-table.component';

import './search-results.scss';

type ISearchResultsProps = RouteComponentProps<{}> & SearchActions & SearchState;

interface ISearchResultsState {
  canSearch: boolean;
}

class SearchResults extends React.Component<ISearchResultsProps, ISearchResultsState> {
  state: ISearchResultsState = {
    canSearch: true
  };
  
  private query: string;
  
  componentDidMount (): void {
    const { query } = queryString.parse(this.props.location.search);
    
    this.query = query || '';
    
    this.doSearch();
  }
  
  componentWillReceiveProps (nextProps: ISearchResultsProps): void {
    const { query } = queryString.parse(nextProps.location.search);
    
    if (query !== this.query) {
      this.query = query || '';
      
      this.doSearch();
    }
  }
  
  render (): JSX.Element {
    return (
      <div className='bi-search-results'>
        { !this.state.canSearch ?
          <div className='bi-search-results__body'>
            <FormattedMessage id='components.search-results.wrong-query'/>
          </div> : this.renderBody() }
      </div>
    );
  }
  
  private renderBody (): JSX.Element | null {
    if (!this.props.data) {
      return null;
    }
    
    const exactBlock = this.props.data.blocks.find((item: any) => item.id === this.query);
    
    if (exactBlock) {
      return <Redirect to={ `/blocks/${this.query}` }/>;
    }
    
    const exactAddress = this.props.data.addresses.includes(this.query);
    
    if (exactAddress) {
      return <Redirect to={ `/blocks/${this.query}` }/>;
    }
  
    const exactTransaction = this.props.data.transactions.includes(this.query);
  
    if (exactTransaction) {
      return <Redirect to={ `/transactions/${this.query}` }/>;
    }
    
    return (
      <div className='bi-search-results__body'>
        { this.props.data.blocks.length === 0 && <FormattedMessage id='components.search-results.no-results'/> }
        
        { this.props.data.blocks.length > 0 &&
        <BlocksTableComponent blocks={ this.props.data.blocks } isFetching={ this.props.fetching }/> }
      </div>
    );
  }
  
  private doSearch (): void {
    if (this.query.length < 5) {
      this.setState({ canSearch: false });
      
      return;
    }
    
    this.setState({ canSearch: true });
    
    this.props.search(this.query);
  }
}

function mapStateToProps (state: AppState): SearchState {
  return state.search;
}

function mapDispatchToProps (dispatch: any): any {
  return bindActionCreators(SearchActions, dispatch);
}


export const SearchResultsComponent = connect(mapStateToProps, mapDispatchToProps)(SearchResults);
