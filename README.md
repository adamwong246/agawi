README

The Agawi static website is back by Google docs to store data gathered with Google forms. In order to get a seamless user experience, you cannot use google forms directly. After creating the google form and spreadsheet, "View the live form." View the source of this page and you will find a html snipper <form>...</form>. Copy this into a partial file in the includes folder of the project. Including this partial will give you the pure form.

THIS MUST BE DONE IF YOU CHANGE THE FORM OR DOC. MAKE SURE YOU TEST THIS BEFORE DEPLOYING.