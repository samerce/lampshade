/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    state: PropTypes.object,
    children: PropTypes.string,
  };

  render() {
    const { title, description, style, scripts, state, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <style type='text/css' dangerouslySetInnerHTML={{ __html: editorCss }} />
          <style type='text/css' dangerouslySetInnerHTML={{ __html: editorThemeCss }} />
          {style && <style type='text/css' id="css" dangerouslySetInnerHTML={{ __html: style }} />}
          <link href='https://fonts.googleapis.com/css?family=Rancho' rel='stylesheet' type='text/css' />
          <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js" type="text/javascript" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {state && (
            <script
              dangerouslySetInnerHTML={{ __html:
              `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
            />
          )}
          {scripts && scripts.map(script => <script key={script} src={script} />)}
          {analytics.google.trackingId &&
            <script
              dangerouslySetInnerHTML={{ __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
            />
          }
          {analytics.google.trackingId &&
            <script src="https://www.google-analytics.com/analytics.js" async defer />
          }
        </body>
      </html>
    );
  }
}

export default Html;

var editorThemeCss = '.medium-toolbar-arrow-under:after{border-color:#242424 transparent transparent;top:50px}.medium-toolbar-arrow-over:before{border-color:transparent transparent #242424;top:-8px}.medium-editor-toolbar{background-color:#242424;background:-webkit-linear-gradient(top,#242424,rgba(36,36,36,.75));background:linear-gradient(to bottom,#242424,rgba(36,36,36,.75));border:1px solid #000;border-radius:5px;box-shadow:0 0 3px #000}.medium-editor-toolbar li button{background-color:#242424;background:-webkit-linear-gradient(top,#242424,rgba(36,36,36,.89));background:linear-gradient(to bottom,#242424,rgba(36,36,36,.89));border:0;border-right:1px solid #000;border-left:1px solid #333;border-left:1px solid rgba(255,255,255,.1);box-shadow:0 2px 2px rgba(0,0,0,.3);color:#fff;height:50px;min-width:50px;-webkit-transition:background-color .2s ease-in;transition:background-color .2s ease-in}.medium-editor-toolbar li button:hover{background-color:#000;color:#ff0}.medium-editor-toolbar li .medium-editor-button-first{border-bottom-left-radius:5px;border-top-left-radius:5px}.medium-editor-toolbar li .medium-editor-button-last{border-bottom-right-radius:5px;border-top-right-radius:5px}.medium-editor-toolbar li .medium-editor-button-active{background-color:#000;background:-webkit-linear-gradient(top,#242424,rgba(0,0,0,.89));background:linear-gradient(to bottom,#242424,rgba(0,0,0,.89));color:#fff}.medium-editor-toolbar-form{background:#242424;border-radius:5px;color:#999}.medium-editor-toolbar-form .medium-editor-toolbar-input{background:#242424;box-sizing:border-box;color:#ccc;height:50px}.medium-editor-toolbar-form a{color:#fff}.medium-editor-toolbar-anchor-preview{background:#242424;border-radius:5px;color:#fff}.medium-editor-placeholder:after{color:#b3b3b1}';
var editorCss = '.medium-editor-element{padding: 0 5px;}.medium-editor-anchor-preview,.medium-editor-toolbar{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:16px;z-index:2000}@-webkit-keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes medium-editor-image-loading{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}@keyframes medium-editor-pop-upwards{0%{opacity:0;-webkit-transform:matrix(.97,0,0,1,0,12);transform:matrix(.97,0,0,1,0,12)}20%{opacity:.7;-webkit-transform:matrix(.99,0,0,1,0,2);transform:matrix(.99,0,0,1,0,2)}40%{opacity:1;-webkit-transform:matrix(1,0,0,1,0,-1);transform:matrix(1,0,0,1,0,-1)}100%{-webkit-transform:matrix(1,0,0,1,0,0);transform:matrix(1,0,0,1,0,0)}}.medium-editor-anchor-preview{left:0;line-height:1.4;max-width:280px;position:absolute;text-align:center;top:0;word-break:break-all;word-wrap:break-word;visibility:hidden}.medium-editor-anchor-preview a{color:#fff;display:inline-block;margin:5px 5px 10px}.medium-editor-placeholder-relative:after,.medium-editor-placeholder:after{content:attr(data-placeholder)!important;white-space:pre;padding:inherit;margin:inherit;font-style:italic}.medium-editor-anchor-preview-active{visibility:visible}.medium-editor-dragover{background:#ddd}.medium-editor-image-loading{-webkit-animation:medium-editor-image-loading 1s infinite ease-in-out;animation:medium-editor-image-loading 1s infinite ease-in-out;background-color:#333;border-radius:100%;display:inline-block;height:40px;width:40px}.medium-editor-placeholder{position:relative}.medium-editor-placeholder:after{position:absolute;left:0;top:0}.medium-editor-placeholder-relative,.medium-editor-placeholder-relative:after{position:relative}.medium-toolbar-arrow-over:before,.medium-toolbar-arrow-under:after{border-style:solid;content:"";display:block;height:0;left:50%;margin-left:-8px;position:absolute;width:0}.medium-toolbar-arrow-under:after{border-width:8px 8px 0}.medium-toolbar-arrow-over:before{border-width:0 8px 8px;top:-8px}.medium-editor-toolbar{left:0;position:absolute;top:0;visibility:hidden}.medium-editor-toolbar ul{margin:0;padding:0}.medium-editor-toolbar li{float:left;list-style:none;margin:0;padding:0}.medium-editor-toolbar li button{box-sizing:border-box;cursor:pointer;display:block;font-size:14px;line-height:1.33;margin:0;padding:15px;text-decoration:none}.medium-editor-toolbar li button:focus{outline:0}.medium-editor-toolbar li .medium-editor-action-underline{text-decoration:underline}.medium-editor-toolbar li .medium-editor-action-pre{font-family:Consolas,"Liberation Mono",Menlo,Courier,monospace;font-size:12px;font-weight:100;padding:15px 0}.medium-editor-toolbar-active{visibility:visible}.medium-editor-sticky-toolbar{position:fixed;top:1px}.medium-editor-relative-toolbar{position:relative}.medium-editor-toolbar-active.medium-editor-stalker-toolbar{-webkit-animation:medium-editor-pop-upwards 160ms forwards linear;animation:medium-editor-pop-upwards 160ms forwards linear}.medium-editor-action-bold{font-weight:bolder}.medium-editor-action-italic{font-style:italic}.medium-editor-toolbar-form{display:none}.medium-editor-toolbar-form a,.medium-editor-toolbar-form input{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.medium-editor-toolbar-form .medium-editor-toolbar-form-row{line-height:14px;margin-left:5px;padding-bottom:5px}.medium-editor-toolbar-form .medium-editor-toolbar-input,.medium-editor-toolbar-form label{border:none;box-sizing:border-box;font-size:14px;margin:0;padding:6px;width:316px;display:inline-block}.medium-editor-toolbar-form .medium-editor-toolbar-input:focus,.medium-editor-toolbar-form label:focus{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;box-shadow:none;outline:0}.medium-editor-toolbar-form a{display:inline-block;font-size:24px;font-weight:bolder;margin:0 10px;text-decoration:none}.medium-editor-toolbar-form-active{display:block}.medium-editor-toolbar-actions:after{clear:both;content:"";display:table}.medium-editor-element{word-wrap:break-word;min-height:30px}.medium-editor-element img{max-width:100%}.medium-editor-element sub{vertical-align:sub}.medium-editor-element sup{vertical-align:super}.medium-editor-hidden{display:none}';
