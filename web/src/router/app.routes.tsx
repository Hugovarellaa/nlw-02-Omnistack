import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { TeacherForm } from '../pages/TeacherForm'
import { TeacherList } from '../pages/TeacherList'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="study" element={<TeacherList />} />
      <Route path="give-classes" element={<TeacherForm />} />
    </Routes>
  )
}
