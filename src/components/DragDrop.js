import React from 'react' ;
const styles = {
    left: {
        width: '250px',
        height: '150px',
        border: '1px solid #DCDCDC',
        float: 'left'
    },
    droppable: {
        margin: '0 auto',
        width: '50%',
        marginTop: '80px'
    },
    para: {
        marginRight: '11px',
        border: '1px solid #DCDCDC',
        padding: '12px 16px',
        borderRadius: '50%',
        width: '15px',
        float: 'left'
    }
}

class DragDrop extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                { no: 1, text: "This is text 1" },
                { no: 2, text: "This is text 2" },
                { no: 3, text: "This is text 3" },
                { no: 4, text: "This is text 4" }
            ],
            componentContainer: []
        }
    }

    onDragStart = (e, v) => {
        e.dataTransfer.dropEffect = "move";
        e.dataTransfer.setData("text/plain", v)
    }

    allowDrop = ev => {
        ev.preventDefault();
    }

    onDropLeft = e => {
        const data = e.dataTransfer.getData("text/plain");
        let { componentContainer } = this.state;
        componentContainer.push(data);
        this.setState({ componentContainer });
    }

    render() {
        const { items, componentContainer} = this.state;

        return (
            <div>
                <div style={{ marginTop: '35px' }}>
                    Draggable texts : <br />

                    <div style={{ display: 'inline-block' }}>
                        {
                            items.map((item) => {
                                return <p style={styles.para} draggable="true" onDragStart={(e) => this.onDragStart(e, item.text)} >{item.no}</p>
                            })
                        }
                    </div>

                </div>

                <div style={styles.droppable}>
                    <div style={styles.left} onDragOver={this.allowDrop} onDrop={this.onDropLeft}>ComponentContainer
                           {
                            componentContainer.map(itm => {
                                return <p>{itm}</p>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }

}
export default DragDrop;