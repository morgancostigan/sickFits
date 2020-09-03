import Reset from '../components/Reset';

const resetPage = props => (
    <div>
        <p>Reset Your Password</p>
        <Reset resetToken={props.query.resetToken}/>
    </div>
)

export default resetPage;