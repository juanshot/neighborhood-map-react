import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PlaceInfo extends Component {
    state = {
        info: '',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBM8pLrHOpH9cd8WfNvly0GfSp2BkxEYl4'
    }
    componentDidMount () {
        let params = new URLSearchParams()
        params.append('address', this.props.placeName)
        console.log('component has been mounted', params)
        fetch(`${this.state.url}&address=${encodeURIComponent(this.props.placeName)}`).then(response => {
            return response.json()
        }).then(responseJson => {
            console.log('formated res', responseJson)
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