"use strict";(self.webpackChunkgworks_docs=self.webpackChunkgworks_docs||[]).push([[607],{6472:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=o(7462),s=o(3366),n=(o(7294),o(3905)),i=["components"],a={id:"GworksIdPHP",title:"How to use GWorks-ID in PHP"},d=void 0,c={unversionedId:"GWorks-ID/GworksIdPHP",id:"GWorks-ID/GworksIdPHP",isDocsHomePage:!1,title:"How to use GWorks-ID in PHP",description:"How to use GWorks-ID in PHP ?",source:"@site/docs/GWorks-ID/gwidPHP.md",sourceDirName:"GWorks-ID",slug:"/GWorks-ID/GworksIdPHP",permalink:"/docs/GWorks-ID/GworksIdPHP",editUrl:"https://github.com/GWorks-eu/Docs/edit/master/docs/GWorks-ID/gwidPHP.md",tags:[],version:"current",lastUpdatedBy:"Dominic",lastUpdatedAt:1634909219,formattedLastUpdatedAt:"10/22/2021",frontMatter:{id:"GworksIdPHP",title:"How to use GWorks-ID in PHP"},sidebar:"myAutogeneratedSidebar",previous:{title:"How to use GWorks-ID in Javscript?",permalink:"/docs/GWorks-ID/GworksIdJS"},next:{title:"Changelogs",permalink:"/docs/Satou-Chan Discord Bot/aSatouchangelog"}},u=[{value:"How to use GWorks-ID in PHP ?",id:"how-to-use-gworks-id-in-php-",children:[],level:3}],k={toc:u};function p(e){var t=e.components,o=(0,s.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"how-to-use-gworks-id-in-php-"},"How to use GWorks-ID in PHP ?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-PHP"},"//First let check if user is logged in. Here we use PHP-Sessions\nsession_start();\n\n//Check if the callback includes the token\nif (isset($_GET['code'])) {\n    $code = $_GET['code'];\n    $userData = file_get_contents(\"https://id.g-works.eu/v2/userData/?token=$code\"); //Get user information from API\n\n\n    $userData = json_decode($userData); //Format to JSON\n    $_SESSION['CODE'] = $code; //Use the token as session to call it every time and everywhere\n\n    header(\"Location: http://your-nice-page.example/\"); //Redirect the user to the main page if the user is logged in\n}else{\n    //Redirect user to Authorization page if the user isn't logged in\n    header('Location: https://id.g-works.eu/auth/?clientID=(App ID)&redirectURI=(Redirect URI)'); //Redirect URI is the url on your website to this page\n}\n\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,n.kt)("strong",{parentName:"p"},"Before you can test it"),": Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"(App ID)")," with the numeric ID from your project from ",(0,n.kt)("a",{href:"https://id.g-works.eu/panel/applications/"},"here"),"! After this replace ",(0,n.kt)("inlineCode",{parentName:"p"},"(Redirect URI)")," with the redirect URI you set at your project at ",(0,n.kt)("b",null,"GWorks ID"),"!")))}p.isMDXComponent=!0}}]);