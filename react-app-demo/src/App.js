import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Login from './components/Login';
import Play from './components/Play';
import Register from './components/Register';
import GameStats from './components/GameStats';

//the root "component"

const PAGES = {
  LOGIN: 0,
  PROFILE: 1,
  REGISTER: 2,
  PLAY: 3,
  GAMESTATS: 4
}

class App extends Component {
	constructor(){
		super()
		this.state = {
			currentPage: PAGES.LOGIN,
			token: null,
			name: null
		}
  }

  goToProfile(token, name){
		this.setState({
			currentPage: PAGES.PROFILE,
			token: token,
			name: name
		});
  }

  goToLogin(){
		this.setState({
			currentPage: PAGES.LOGIN,
			token: null,
			name: null
		});
  }
  
  goToPlay(token,name) {
		this.setState({
      currentPage: PAGES.PLAY,
      token: token,
			name: name
		})
	}

	logout(token,name) {
		this.setState({
			currentPage: PAGES.LOGIN,
			token: token,
			name: name
		})
  }
  
  goToRegister() {
		this.setState({
			currentPage: PAGES.REGISTER,
			token: null,
			name: null
		})
  }
  
  goToGameStats(token,name) {
		this.setState({
			currentPage: PAGES.GAMESTATS,
			token: token,
			name: name
		})
	}
  
  renderPage(){
		switch (this.state.currentPage){
			case PAGES.LOGIN:
				return <Login
          loginFunc = {(token, name) => this.goToPlay(token, name)}
          register = {()=>this.goToRegister()}
				/>
			case PAGES.PROFILE:
				return <Profile 
					userToken = {this.state.token} 
					userName = {this.state.name} 
					deleteUser = {() => this.logout()}
				/>
			case PAGES.REGISTER:
				return <Register 
          completeRegistration = {() => this.goToLogin()}
          backToLogin = {()=>this.goToLogin()}
				/>
			case PAGES.PLAY:
				return <Play
					userName = {this.state.name}
					userToken = {this.state.token}
					submitScoreFunc = {() => this.goToPlay()} 
				/>
      case PAGES.GAMESTATS:
				return <GameStats
					userName = {this.state.name}
					userToken = {this.state.token}
				/>
			default: 
				return <Login loginFunc = {() => this.goToProfile()} />
		}
  }
  
  render() {
		return (
		<div>
      <Navigation 
				userName = {this.state.name}
				logoutFunc = {() => this.logout()} 
				isLoggedIn = {this.state.token != null} 
				playFunc = {() => this.setState({currentPage:PAGES.PLAY})}
				registerFunc = {() => this.setState({currentPage:PAGES.REGISTER})}
				goToProfile = {() => this.setState({currentPage:PAGES.PROFILE})}
        goToLogin = {() => this.setState({currentPage:PAGES.LOGIN})}
        goToGameStats = {() => this.setState({currentPage:PAGES.GAMESTATS})}
			/>
			{this.renderPage()}
		</div>)
	};
  
}

export default App;
