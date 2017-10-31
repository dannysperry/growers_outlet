import React, { Component } from 'react'
import PropTypes from 'props-types'

class Banner extends Component {
  render() {
    let sectionId, classNames, columnClasses, title, subtitle = null
    if (this.props.big) {
      sectionId = 'BannerBig'
      classNames = 'animated fadeInUp'
      columnClasses = "col-md-10 col-md-offset-2"
    } else {
      sectionId = 'Banner'
      columnClasses = 'col-md-12'
    }

    title = <h1 className={classNames}>{this.props.title}</h1>
    subtitle = <p className={classNames}>{this.props.subtitle}</p>

    return(
      <section id={sectionId} className="Banner">
        <div className="container">
          <div className="row">
            <div className={columnClasses}>
              <div className="block">
                { title }
                { subtitle }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  big: PropTypes.bool.isRequired
}

export default Banner