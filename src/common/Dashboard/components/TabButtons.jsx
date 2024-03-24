

export default function TabButtons() {
  return (
    <NavLink to='video-tutorial'
    className={({isActive}) => (isActive ? styles.navLinkActive : '')}
    >
    VideoTutorial
    </NavLink>
  )
}