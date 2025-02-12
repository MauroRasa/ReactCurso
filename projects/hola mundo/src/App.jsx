import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){

    const [name, setName] = useState('midudev')

    const handleClick = () => {
        setName('kikobeats')
    }

    return (
        <section className='App'>
            <TwitterFollowCard initialIsFollowing={true} userName={name} name="Tu Vieja">
                Tu Vieja
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={false} userName={name} name="Tu Viejinha">
                Tu Viejinha
            </TwitterFollowCard>
            <TwitterFollowCard initialIsFollowing={true} userName={name} name="Tu Viejovich">
                Tu Viejovich
            </TwitterFollowCard>
            <button onClick={() => setName('kikobeats')}>
                Chupala entonce
            </button>
        </section>
    )
}