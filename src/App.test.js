import { render, screen } from '@testing-library/react';
import App from './App'
import axios from 'axios';


test('renders heading', async () => {
  render(<App />)

  const heading = await screen.getByRole('heading', {
      name: /Hello, World!/i
  })  
  expect(heading).toBeInTheDocument()  
});

describe('products api', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('should render products', async () => {
    const mockResponse = {
      data: [{
        "id": 597,
        "created_at": "2022-11-21T00:05:12.517324+00:00",
        "title": "Apple iPhone 13 128 GB in Midnight",
        "price": 749,
        "rating": 5,
        "reviewCount": 31,
        "prices": {
            "now": 749,
            "was": 0,
            "save": 0
        },
        "featureDescriptions": [
            "6.1-inch Super Retina XDR display",
            "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
            "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording",
            "12MP TrueDepth front camera with Night mode and 4K Dolby Vision HDR recording",
            "A15 Bionic chip for lightning-fast performance"
        ],
        "colour": "Black",
        "brand": "Apple",
        "brandImageUrl": "https://res.cloudinary.com/dv3ahkrfl/image/upload/v1668985704/brand_logos/apple.png",
        "brandImageId": "brand_logos/apple.png",
        "availability": "IN_STOCK",
        "imageUrl": "https://res.cloudinary.com/dv3ahkrfl/image/upload/v1668985704/product_images/unv27mpasrw86mtbvnuttz-iphone_13_midnight_p_m_p.jpg",
        "imageId": "product_images/unv27mpasrw86mtbvnuttz-iphone_13_midnight_p_m_p.jpg"
    }]
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);
    render(<App />);
    expect(await screen.findByText('Apple iPhone 13 128 GB in Midnight')).toBeInTheDocument();    
})
})