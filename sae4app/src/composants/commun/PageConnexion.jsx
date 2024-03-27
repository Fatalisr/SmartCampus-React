import PropTypes from "prop-types";

const PageConnexion = (props) =>{
    return(
        <>
            <div>
                <a href="/usager">Usager</a>
            </div>

        </>
    )
}

PageConnexion.propTypes = {
    exampleProp: PropTypes.string.isRequired,
}
export default PageConnexion