import '../assets/styles/footer.scss'

export default {
    data(){
        return{
            author:'poliya'
        }
    },
    render(){
        return(
            <div id="footer">
                <span> written by {this.author}</span>
            </div>
            )

    }
}