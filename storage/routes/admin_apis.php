<?php

use Illuminate\Support\Facades\Route;

Route::post('admin_login', [App\Http\Controllers\Admins\LoginController::class, 'login'])->name('admin_login');

//guarded routes
Route::middleware(['admin'])->prefix('appAdmin')->group(function () {
    Route::post('/logout',[App\Http\Controllers\Admins\LoginController::class, 'logout']);
    Route::get('/getNotifications',[App\Http\Controllers\Admin\NotificationController::class, 'getAll']);
    Route::get('/getUnreadNotifications',[App\Http\Controllers\Admin\NotificationController::class, 'getUnread']);
    Route::get('/notification/done/{id}',[App\Http\Controllers\Admin\NotificationController::class, 'done']);
    Route::get('company/show/{id}', [App\Http\Controllers\Api\CompanyprofileController::class, 'show'])->name('show_one_company');
    Route::get('company/approve/{id}', [App\Http\Controllers\Api\CompanyprofileController::class, 'approve'])->name('approve');
    Route::post('appsetting/handleLogo',[App\Http\Controllers\Api\AppSettingController::class,'handleLogo'])->name('handle_appsetting_logo');
    Route::post('add-new-category',[App\Http\Controllers\Api\SoftwarecategoryController::class,'store'])->name('store_software');
    Route::delete('software-category/delete/{id}',[App\Http\Controllers\Api\SoftwarecategoryController::class,'destroy'])->name('delete_software_category');
    Route::put('software-category/update/{id}' , [\App\Http\Controllers\Api\SoftwarecategoryController::class , 'update'])->name('update_software_category');
    Route::get('/all-leads',[App\Http\Controllers\Admin\DashboardController::class, 'allLeads']);
    Route::get('/all-softwares',[App\Http\Controllers\Admin\DashboardController::class, 'allSoftwares']);
    Route::get('/all-categories',[App\Http\Controllers\Admin\DashboardController::class, 'allCats']);
    Route::get('/all-admins',[App\Http\Controllers\Admin\AdminController::class, 'allAdmins']);
    Route::post('/add-admins',[App\Http\Controllers\Admin\AdminController::class, 'store']);
    Route::put('/deactivate/{id}',[App\Http\Controllers\Admin\AdminController::class, 'deactivate']);
    Route::delete('/delete/{id}',[App\Http\Controllers\Admin\AdminController::class, 'delete']);


});
