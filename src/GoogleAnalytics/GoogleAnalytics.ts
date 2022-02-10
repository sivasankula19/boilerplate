import ReactGA from 'react-ga'
import { ID } from '../App_Constants'

class Analytics {
  constructor() {
    ReactGA.initialize(ID)
    this.activeUsersPage()
  }
  activeUsersPage = () => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  googleEvent = (obj:any) => {
    const eventData = {
      category: obj.category,
      action: obj.action,
    }
    ReactGA.event(eventData)
  }
}
export let GoogleAnalyticsInstance: any = null

export const resetInstance = () => {
  GoogleAnalyticsInstance = null
}

export const intialiseAnalytics = () => {
  GoogleAnalyticsInstance = new Analytics()
}