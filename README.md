## How to get Google forms and Google docs working

http://www.immersionmedia.com/blog/customizing-and-styling-google-forms/

The Agawi static website is backed by Google docs to store data gathered with Google forms. In order to get a seamless user experience, you cannot use embed the google forms iframe directly. Instead, after creating the google form and spreadsheet, "View the live form." View the source of this page and you will find a html snippet <form>...</form>. 

Copy this into a partial file in the includes folder of the project. The file must begin with an underscore.
```
ex: includes/_you_form_here.html
```
Including this partial will give you the pure form.
```
<div>
  <!-- @include _your_form_here -->
</div>
```

THIS MUST BE DONE IF YOU CHANGE THE FORM OR DOC. MAKE SURE YOU TEST THIS BEFORE DEPLOYING.