import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin"
const AdminIndex = () => {
  return (
    <Admin>
      <Layout>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-bold text-gray-900">مدیریت</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">

            </div>
            {/* /End replace */}
          </div>
        </main>
      </Layout>
    </Admin>
  )
}
export default AdminIndex;
