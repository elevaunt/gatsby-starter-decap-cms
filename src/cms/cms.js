import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import MainTemplatePreview from './preview-templates/MainTemplatePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

// CMS.registerPreviewTemplate('index', IndexPagePreview)
// CMS.registerPreviewTemplate('home', MainTemplatePreview)
CMS.registerPreviewTemplate('pages', MainTemplatePreview)
CMS.registerPreviewTemplate('funnels', MainTemplatePreview)
// CMS.registerPreviewTemplate('about', AboutPagePreview)
// CMS.registerPreviewTemplate('products', ProductPagePreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
