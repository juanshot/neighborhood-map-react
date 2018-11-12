import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PlaceInfo extends Component {
    state = {
        info: '',
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json'
    }
    componentDidMount () {
        let headers = new Headers({
            'Content-type': 'application/json'
        })
        console.log('component has been mounted')
        fetch(`${this.state.url}&origin=*&utf8=&srsearch=${this.props.placeName}`, { headers }).then(response => {
            return response.json()
        }).then(responseJson => {
            console.log('formated res', responseJson)
        }).catch(err => {
            console.log('error', err)
        })
    }
    render () {
        return (<div>Info</div>)
    }
}
PlaceInfo.propTypes = {
    placeName: PropTypes.string.isRequired
}
export default PlaceInfo