
const Error = (props) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
        {props.mensaje || 'Error'}
    </div>
  )
}

export default Error