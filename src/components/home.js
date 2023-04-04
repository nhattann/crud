import React from 'react';
import { Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
           <Link to='/create'><Button>Create New</Button></Link>
           <Link to='/read'><Button>List</Button></Link>
        </div>
    )
}