import React, { Component } from 'react';
import '../App.css';
import { RaisedButton} from 'material-ui';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Navigation extends Component {
		render() {
			var loggedIn = this.props.isLoggedIn;
			return (
				<div className="App">
					<MuiThemeProvider>
						<Toolbar style={{display: 'block'}}>
						<ToolbarGroup >           
							<RaisedButton labelColor='white' primary={true} disabled={!loggedIn} label={"Profile"} onClick={() => this.props.goToProfile()} />
							<ToolbarSeparator />  
							<RaisedButton labelColor='white' primary={true} disabled={!loggedIn} label={"Game"} onClick={() => this.props.playFunc()}/> 
							<ToolbarSeparator />  
							<RaisedButton labelColor='white' primary={true} disabled={!loggedIn} label={"TOP 10"} onClick={() => this.props.goToGameStats()}/>
							<ToolbarSeparator />
							<RaisedButton labelColor='white' primary={true} disabled={!loggedIn} label={"Logout"} onClick={() => this.props.logoutFunc()}/> 
							<ToolbarSeparator />  
						</ToolbarGroup>  
						</Toolbar>
					</MuiThemeProvider>
				</div>
			);
		}
	};

export default Navigation;