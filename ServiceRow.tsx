import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from './InvestmentIcons';

export interface ServiceMosaicImages {
  large: { src: string; alt: string; width: number; height: number };
  stackedTop: { src: string; alt: string; width: number; height: number };
  stackedBottom: { src: string; alt: string; width: number; height: number };
}

export interface ServiceGridImages {
  imageLeft: { src: string; alt: string; width: number; height: number };
  imageRight: { src: string; alt: string; width: number; height: number };
}

export interface ServiceRowProps {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  layout: 'images-left' | 'images-right';
  images:
    | { type: 'mosaic-3'; data: ServiceMosaicImages }
    | { type: 'grid-2'; data: ServiceGridImages };
}

export default function ServiceRow({
  id,
  eyebrow,
  heading,
  body,
  layout,
  images,
}: ServiceRowProps) {
  const isImagesLeft = layout === 'images-left';

  const renderImages = () => {
    if (images.type === 'mosaic-3') {
      const { large, stackedTop, stackedBottom } = images.data;
      return (
        <div className="investment-mosaic-wrapper">
          <div className="investment-mosaic-large">
            <Image
              src={large.src}
              alt={large.alt}
              width={large.width}
              height={large.height}
              className="investment-service-img"
            />
          </div>
          <div className="investment-mosaic-stacked">
            <div className="investment-mosaic-small">
              <Image
                src={stackedTop.src}
                alt={stackedTop.alt}
                width={stackedTop.width}
                height={stackedTop.height}
                className="investment-service-img"
              />
            </div>
            <div className="investment-mosaic-small">
              <Image
                src={stackedBottom.src}
                alt={stackedBottom.alt}
                width={stackedBottom.width}
                height={stackedBottom.height}
                className="investment-service-img"
              />
            </div>
          </div>
        </div>
      );
    }

    const { imageLeft, imageRight } = images.data;
    return (
      <div className="investment-grid2-wrapper">
        <div className="investment-grid2-item">
          <Image
            src={imageLeft.src}
            alt={imageLeft.alt}
            width={imageLeft.width}
            height={imageLeft.height}
            className="investment-service-img"
          />
        </div>
        <div className="investment-grid2-item">
          <Image
            src={imageRight.src}
            alt={imageRight.alt}
            width={imageRight.width}
            height={imageRight.height}
            className="investment-service-img"
          />
        </div>
      </div>
    );
  };

  const renderCopy = () => (
    <div className="investment-service-copy">
      <p className="investment-service-eyebrow">{eyebrow}</p>
      <h2 className="investment-service-heading">{heading}</h2>
      <p className="investment-service-body-single">{body}</p>
      <div className="investment-btn-wrapper">
        <Link href="/contact" className="investment-service-btn">
          <span>Learn More</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );

  return (
    <section className="investment-service-row" id={id} aria-label={eyebrow}>
      <div className="container investment-container">
        <div className={`investment-row-grid ${isImagesLeft ? 'layout-images-left' : 'layout-images-right'}`}>
          {isImagesLeft ? (
            <>
              <div className="investment-row-media">{renderImages()}</div>
              <div className="investment-row-text">{renderCopy()}</div>
            </>
          ) : (
            <>
              <div className="investment-row-text">{renderCopy()}</div>
              <div className="investment-row-media">{renderImages()}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
