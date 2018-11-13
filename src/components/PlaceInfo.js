import React, {Component} from 'react'
import PropTypes from 'prop-types'

class PlaceInfo extends Component {
    state = {
        info: [],
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json'
    }
    // Getting Wikipedia info after mounting component
    componentDidMount () {
        let headers = new Headers({
            'Content-type': 'application/json'
        })
        fetch(`${this.state.url}&origin=*&utf8=&srsearch=${this.props.placeName}`, { headers }).then(response => {
            return response.json()
        }).then(responseJson => {
            this.setState({info: responseJson.query.search})
        }).catch(err => {
            console.log('error', err)
        })
    }
    render () {
        return (
        <div>
            <span>Info by Wikipedia:</span>
            <ul>
            {this.state.info.map(info => (<li key={info.title} className="content" dangerouslySetInnerHTML={{__html: info.snippet}}></li>))}
            </ul>
        </div>
        )
    }
}
PlaceInfo.propTypes = {
    placeName: PropTypes.string.isRequired // place name received by MapComponent
}
export default PlaceInfo