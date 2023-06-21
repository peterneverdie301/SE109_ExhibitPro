import IconHeartFull from '@/assets/icons/IconHeartFull'
import { IMAGES } from '@/assets/images'
import { path } from '@/constants/path'
import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import './AuthLayout.scss'

AuthLayout.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

function AuthLayout(props) {
   const { children } = props
   return (
      <div className="auth">
         <div className="auth__content">
            <div className="auth__content-header">
               <Link to={path.home} className="header__logo">
                  <img
                  />
               </Link>
            </div>
            <div className="auth__content-form">
               <div className="form-container">{children}</div>
            </div>
            <div className="auth__content-footer">
               <div className="footer__contact">
                  <p>Please do not hesitate to contact us</p>
                  <a>ExhibitPro@gmail.com</a>
               </div>
            </div>
         </div>

         <div className="auth__image">
            <img
               alt="Photo by KonseptTheme on June 01, 2020."
               crossOrigin="anonymous"
               decoding="auto"
               sizes="598px"
               src={IMAGES.AuthCover}
            />
         </div>
      </div>
   )
}

export default AuthLayout
