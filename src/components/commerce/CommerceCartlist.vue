<template>
 <!-- Blog Article -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
  <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 lg:gap-x-12">
    <!-- Content -->
    <div class="lg:col-span-2">
      <div class="py-8 lg:pr-4 lg:pr-8">
        <div class="space-y-5 lg:space-y-8">
          <a class="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline dark:text-blue-400" href="#">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Back to Blog
          </a>

          <h2 class="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">Announcing a free plan for small teams</h2>
<!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="flex flex-col">
      <div class="flex flex-col">
  <div class="-m-1.5 overflow-x-auto">
    <div class="p-1.5 min-w-full inline-block align-middle">
      <div class="overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <caption class="py-2 text-left text-sm text-gray-600 dark:text-gray-500">List of users</caption>
          <thead>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
              <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>

            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a class="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    
  </div>
  <!-- End Card -->
</div>
<!-- End Table Section -->
          
        </div>
      </div>
    </div>
    <!-- End Content -->

    <!-- Sidebar -->
    <div class="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
      <div class="sticky top-0 left-0 py-8 lg:pl-4 lg:pl-8">
        <!-- Avatar Media -->
        <div class="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
          <a class="block flex-shrink-0" href="#">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
          </a>

          <a class="group grow block" href="">
            <h5 class="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Leyla Ludic
            </h5>
            <p class="text-sm text-gray-500">
              UI/UX enthusiast
            </p>
          </a>

          <div class="grow">
            <div class="flex justify-end">
              <button type="button" class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-full border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs">
                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                Follow
              </button>
            </div>
          </div>
        </div>
        <!-- End Avatar Media -->

        <div class="space-y-6">
          <!-- Media -->
          <a class="group flex items-center gap-x-6" href="#">
            <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                5 Reasons to Not start a UX Designer Career in 2022/2023
              </span>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
            </div>
          </a>
          <!-- End Media -->

          <!-- Media -->
          <a class="group flex items-center gap-x-6" href="#">
            <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                If your UX Portfolio has this 20% Well Done, it Will Give You an 80% Result
              </span>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
            </div>
          </a>
          <!-- End Media -->

          <!-- Media -->
          <a class="group flex items-center gap-x-6" href="#">
            <div class="grow">
              <span class="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                7 Principles of Icon Design
              </span>
            </div>

            <div class="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
              <img class="w-full h-full absolute top-0 left-0 object-cover rounded-lg" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Image Description">
            </div>
          </a>
          <!-- End Media -->
        </div>
      </div>
    </div>
    <!-- End Sidebar -->
  </div>
</div>
<!-- End Blog Article -->
</template>