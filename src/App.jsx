import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import CreatePost from './Components/CreatePost'
import PostList from './Components/PostList'
import EmptyMessage from './Components/EmptyMessage'
import { useState } from 'react'
import PostListProvider from './Store/post_List_Store'
function App() {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="app-content">
          <Header />
          {selectedTab === 'home' ? (<PostList ></PostList>) : (<CreatePost setSelectedTab={setSelectedTab}></CreatePost>)}
          <EmptyMessage setSelectedTab={setSelectedTab} />
          <Footer />
        </div>

      </div>
    </PostListProvider>
  )
}

export default App
