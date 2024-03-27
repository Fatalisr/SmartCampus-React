import PropTypes from "prop-types";

const PageAcceuilTechnicien = (props) =>{

    return(
        <>
            <p>{sessionStorage.getItem('role')}</p>
        </>
    )
}

PageAcceuilTechnicien.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageAcceuilTechnicien