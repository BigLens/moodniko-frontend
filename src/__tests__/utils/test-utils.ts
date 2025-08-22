import type { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Custom render function that includes providers if needed
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const AllTheProviders = ({ children }: { children: ReactNode }) => {
    return children;
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };

// Export userEvent for interaction testing
export { userEvent };

// Common test data
export const mockMoodData = {
  happy: {
    id: 'happy',
    label: 'Happy',
    emoji: '😊',
    color: 'bg-yellow-100',
    description: 'Feeling joyful and content',
    therapeuticGoal: 'Maintain positive energy and spread joy'
  },
  sad: {
    id: 'sad',
    label: 'Sad',
    emoji: '😢',
    color: 'bg-blue-100',
    description: 'Feeling down or melancholic',
    therapeuticGoal: 'Provide uplifting content to improve mood'
  }
};

// Mock content data
export const mockContentData = [
  {
    id: '1',
    title: 'Happy - Pharrell Williams',
    description: 'An upbeat anthem that instantly lifts your spirits.',
    imageUrl: 'https://example.com/happy.jpg',
    type: 'music' as const,
    mood: 'happy',
    source: 'Spotify',
    rating: 4.8,
    therapeuticBenefit: 'Mood booster, energy lifter'
  }
];

// Common test helpers
export const waitForLoadingToFinish = () => {
  return new Promise(resolve => setTimeout(resolve, 0));
};

export const createMockUser = (overrides = {}) => ({
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  ...overrides
});

// Add a simple test to satisfy Jest requirements
describe('test-utils', () => {
  it('should export required functions', () => {
    expect(createMockUser).toBeDefined();
    expect(mockMoodData).toBeDefined();
    expect(mockContentData).toBeDefined();
  });
});
