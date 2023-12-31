const styles = {
  root: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 'auto',
    minHeight: '940px',
    position: 'relative',
    color: '#ffffff',
  },
  header: {
    width: '100%',
    height: '92px',
    padding: '0 200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    width: '100%',
    maxWidth: '400px',
  },
  button: {
    cursor: 'pointer',
    padding: 'auto 20px',
    display: 'inline-block',
    marginRight: '30px',
    fontSize: '23px',
  },
  headerRight: {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputContainer: {
    position: 'relative',
    width: '300px',
  },
  input: {
    border: 'none',
    background: 'transparent',
    borderBottom: '2px solid #ffffff',
    outline: 'none',
    height: '40px',
    fontSize: '20px',
    width: '100%',
    color: '#ffffff',
  },
  search: {
    height: '18px',
    width: '18px',
    position: 'absolute',
    right: '5px',
    top: '10px',
  },
  cart: {
    height: '28px',
    width: '28px',
    cursor: 'pointer',
  },
  titleContainer: {
    width: '100%',
    maxWidth: '450px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: '60px',
    textAlign: 'center',
    fontFamily: 'fantasy',
    letterSpacing: '1.5px',
  },
}
export default styles
