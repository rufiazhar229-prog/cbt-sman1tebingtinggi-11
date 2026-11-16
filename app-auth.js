/* Pengaman tampilan. Otorisasi data yang sesungguhnya tetap wajib diatur di RLS Supabase. */
(function () {
    function currentUser() {
        try { return JSON.parse(localStorage.getItem('userLogin') || 'null'); }
        catch (_) { return null; }
    }

    function dashboardFor(user) {
        return user && user.role === 'guru' ? 'dashboard_guru.html' : 'dashboard.html';
    }

    function requireRole(roles) {
        const user = currentUser();
        if (!user) {
            window.location.replace('login.html');
            return null;
        }
        if (roles && !roles.includes(user.role)) {
            window.location.replace(dashboardFor(user));
            return null;
        }
        return user;
    }

    function logout() {
        localStorage.removeItem('userLogin');
        window.location.replace('login.html');
    }

    window.CBTAuth = { currentUser, dashboardFor, requireRole, logout };
})();
