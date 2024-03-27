import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
const Singin = () => {
  return (
    <Layout>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-bold text-gray-900">ورود به حساب کاربری</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <SigninComponent />
        </div>
      </main>
    </Layout>
  )
}
export default Singin;
